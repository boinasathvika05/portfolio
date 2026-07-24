const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'engine', 'districts');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace import { Text } with import { Html }
  if (content.includes('Text') && content.includes('@react-three/drei')) {
    content = content.replace(/\bText\b/g, 'Html');
    
    // Replace <Html ...> props to be compatible
    // <Html position={...} center>
    content = content.replace(/<Html([^>]*)>/g, (match, props) => {
      // Remove text-specific props like fontSize, color, maxWidth, textAlign, anchorX, anchorY, fillOpacity
      let newProps = props
        .replace(/fontSize=\{[^}]*\}/g, '')
        .replace(/color="[^"]*"/g, 'className="text-cyan-400 font-mono text-sm whitespace-nowrap drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]"')
        .replace(/maxWidth=\{[^}]*\}/g, '')
        .replace(/textAlign="[^"]*"/g, 'className="text-center text-cyan-400 font-mono text-sm drop-shadow-[0_0_8px_rgba(0,255,204,0.8)]"')
        .replace(/anchorX="[^"]*"/g, '')
        .replace(/anchorY="[^"]*"/g, '')
        .replace(/fillOpacity=\{[^}]*\}/g, '');
      
      return `<Html center${newProps}>`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
