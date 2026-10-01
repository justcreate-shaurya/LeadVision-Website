import os

css = """
/* ---------- Hiring Table ---------- */
.hiring-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr auto;
  gap: 0;
  padding: 20px 32px;
  border-bottom: 1px solid var(--slate-line);
  align-items: center;
  transition: background 0.15s ease;
}
.hiring-row:hover {
  background: var(--bg-alt);
}
.hiring-role {
  font-weight: 700;
  color: var(--ink);
  font-size: 1rem;
}
.hiring-team {
  color: var(--ink-soft);
  font-size: 0.95rem;
}
.hiring-loc {
  color: var(--ink-soft);
  font-size: 0.95rem;
}
.hiring-apply {
  font-weight: 700;
  color: var(--ink);
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s ease, gap 0.2s ease;
  white-space: nowrap;
}
.hiring-apply:hover {
  color: var(--red);
  gap: 8px;
}

/* ---------- Format Card Tag ---------- */
.format-card .tag {
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--red);
  margin-bottom: 16px;
  text-transform: uppercase;
}

/* ---------- FAQ open state ---------- */
.faq-item .faq-a {
  display: none;
}
.faq-item.open .faq-a {
  display: block;
}
.faq-item.open .faq-q .plus {
  transform: rotate(45deg);
}
"""

with open('global.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css)
