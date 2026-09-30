import os

css_to_add = """
/* ---------- Steps Grid ---------- */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;
}

@media (max-width: 880px) {
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

.steps-grid > div {
  background: var(--white);
  border: 1px solid var(--slate-line);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
}

.steps-grid > div:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
}

.step-num {
  width: 48px;
  height: 48px;
  background: var(--bg-alt);
  border: 1px solid var(--slate-line);
  color: var(--ink);
  font-family: var(--display);
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 24px;
}

.step-title {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--ink);
}

.step-desc {
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* ---------- Feature Grid ---------- */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 880px) {
  .feature-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 560px) {
  .feature-grid { grid-template-columns: 1fr; }
}

.feature-card {
  background: var(--white);
  border: 1px solid var(--slate-line);
  border-radius: var(--radius);
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  border-color: var(--slate);
  box-shadow: 0 12px 40px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}

.feature-card h3 {
  font-family: var(--display);
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--ink);
}

.feature-card p {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin: 0;
  flex: 1;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: var(--bg-alt);
  border: 1px solid var(--slate-line);
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon::after {
  content: "";
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, var(--red), var(--yellow));
  border-radius: 50%;
  opacity: 0.8;
}

/* ---------- Usecase Items ---------- */
.usecase-item {
  background: var(--white);
  border: 1px solid var(--slate-line);
  padding: 16px 20px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}

.usecase-item:hover {
  border-color: var(--slate);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.05);
}

.usecase-item .arrow {
  color: var(--red);
  font-size: 1.2rem;
  line-height: 1;
}
"""

with open('global.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_to_add)
