export function parseMentions(text, users) {
  if (!text || !users?.length) return [];

  const byEmail = new Map();
  const byLocal = new Map();
  const byName = new Map();

  for (const user of users) {
    const email = user.email.toLowerCase();
    byEmail.set(email, user);
    const local = email.split('@')[0];
    if (local) byLocal.set(local.toLowerCase(), user);
    byName.set(user.display_name.toLowerCase(), user);
  }

  const tokenRe = /@([^\s@]+(?:@[^\s@]+)?)/g;
  const found = new Map();
  let match;

  while ((match = tokenRe.exec(text)) !== null) {
    const raw = match[1].replace(/[.,;:!?)]+$/, '');
    const key = raw.toLowerCase();
    const user = byEmail.get(key) || byLocal.get(key) || byName.get(key);
    if (user) found.set(user.id, user);
  }

  return [...found.values()];
}
