"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { useTheme } from "next-themes";
import clsx from "clsx";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

type EditorProps = {
  isPreview?: boolean;
  setItineraryForm?: React.Dispatch<
    React.SetStateAction<{
      destination: string;
      days: number;
      budget: number;
      markdown: string;
    }>
  >;
};

export default function Editor({
  isPreview = false,
  setItineraryForm,
}: EditorProps) {
  const editorRef = useRef(null);

  const markdown = "# Detailed Plan";

  const handleChange = (md: string) => {
    if (setItineraryForm) {
      setItineraryForm((prev) => ({
        ...prev,
        markdown: md,
      }));
    }
  };

  const { theme } = useTheme();

  return (
    <>
      <MDXEditor
        onChange={handleChange}
        readOnly={isPreview}
        ref={editorRef}
        className={clsx(
          "border-gray-600 border-1 rounded-lg w-full",
          theme === "dark" && "dark-theme dark-editor"
        )}
        markdown={markdown}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => {
              if (isPreview) return <></>;

              return (
                <div className="flex flex-wrap">
                  <UndoRedo /> <BoldItalicUnderlineToggles /> <InsertTable />
                  <BlockTypeSelect /> <CreateLink />
                </div>
              );
            },
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
