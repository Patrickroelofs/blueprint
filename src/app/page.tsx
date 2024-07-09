"use client";

import ReactFlow, { Background, Controls } from "reactflow";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="absolute top-0 left-0 w-96 m-8 z-10">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New File <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>Delete</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <ReactFlow>
        <Background />
        <Controls />
      </ReactFlow>
    </main>
  );
}
