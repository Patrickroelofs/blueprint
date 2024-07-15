import { TextNode } from '@/components/nodes/text-node';
import { OutputNode } from '@/components/nodes/output-node';
import { OpenAINode } from '@/components/nodes/openai-node';

export interface NodeComponent {
  name: string;
  element: JSX.Element;
}

export const NodeTypes = {
  textNode: TextNode,
  outputNode: OutputNode,
  openAINode: OpenAINode,
};
