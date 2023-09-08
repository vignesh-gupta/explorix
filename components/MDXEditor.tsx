"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "@mdxeditor/editor/style.css";
import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertTable,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

const markdown = "# Hello World";

export default function Editor() {
  const editorRef = useRef(null);

  useEffect(()=> {
    console.log(editorRef.current);
  }, [editorRef])

  return (
    <>
      <MDXEditor
        contentEditableClassName="prose"
        ref={editorRef}
        className="dark-theme dark-editor border-gray-600 border-1 rounded-lg w-full"
        markdown={markdown}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo /> <BoldItalicUnderlineToggles /> <InsertTable />
                <BlockTypeSelect /> <CreateLink />
              </>
            ),
          }),
          listsPlugin(),
          quotePlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          tablePlugin(),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              txt: "text",
              tsx: "TypeScript",
            },
          }),
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "boo" }),
          markdownShortcutPlugin(),
        ]}
      />
    </>
  );
}
