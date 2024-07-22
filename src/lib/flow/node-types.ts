import { type NodeTypes as NodeType } from '@xyflow/react';
import { TextNode } from '@/components/nodes/text-node';
import { OutputNode } from '@/components/nodes/output-node';
import { OpenAINode } from '@/components/nodes/openai-node';

export const NodeTypes: NodeType = {
  textNode: TextNode,
  outputNode: OutputNode,
  openAINode: OpenAINode,
};
