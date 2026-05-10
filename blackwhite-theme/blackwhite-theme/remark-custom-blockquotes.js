import { visit } from 'unist-util-visit';

export function customBlockquotes() {
  const supportedTypes = ['note', 'warning', 'danger', 'info', 'primary', 'success', 'flat'];

  return (tree) => {
    visit(tree, (node) => {
      
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const data = node.data || (node.data = {});

        
        data.hName = 'blockquote';
        data.hProperties = {
          className: [node.name]
        };
      }
    });
  };
}

export function customInlineLabels() {
  return (tree) => {
    visit(tree, 'text', (node, index, parent) => {
      if (!node.value || typeof index !== 'number') return;

      const parts = [];
      let lastIndex = 0;
      const regex = /\[!(labelblue|labelgrey|labelpink|labelyellow|labelgreen|labelorange)\]@([^@]+)@/g;
      let match;

      while ((match = regex.exec(node.value)) !== null) {
        
        if (match.index > lastIndex) {
          parts.push({
            type: 'text',
            value: node.value.slice(lastIndex, match.index)
          });
        }

        
        const labelNode = {
          type: 'text',
          value: match[2],
          data: {
            hName: 'span',
            hProperties: {
              className: [match[1]]
            }
          }
        };
        parts.push(labelNode);

        lastIndex = match.index + match[0].length;
      }

      
      if (lastIndex < node.value.length) {
        parts.push({
          type: 'text',
          value: node.value.slice(lastIndex)
        });
      }

      
      if (parts.length > 0) {
        parent.children.splice(index, 1, ...parts);
        return index + parts.length;
      }
    });
  };
}
