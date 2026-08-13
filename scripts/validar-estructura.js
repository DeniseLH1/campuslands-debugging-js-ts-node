import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ejerciciosDir = path.join(root, 'ejercicios');
const errors = [];

for (let i = 1; i <= 50; i++) {
  const id = String(i).padStart(3, '0');
  const dir = path.join(ejerciciosDir, `ejercicio-${id}`);
  const required = [
    path.join(dir, 'README.md'),
    path.join(dir, 'codigo'),
    path.join(dir, 'tests'),
    path.join(dir, 'resoluciones'),
    path.join(dir, 'resoluciones', '.gitkeep'),
  ];
  for (const item of required) {
    if (!fs.existsSync(item)) errors.push(`Falta: ${path.relative(root, item)}`);
  }
}

if (errors.length) {
  console.error('Estructura invalida:\n' + errors.join('\n'));
  process.exit(1);
}

console.log('Estructura correcta: 50 ejercicios listos.');
