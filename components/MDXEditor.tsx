"use client";

import React from "react";
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
  ListsToggle
} from "@mdxeditor/editor";
import { useTheme } from "next-themes";
import clsx from "clsx";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

type EditorProps = {
  isPreview?: boolean;
  markdown: string;
  setItineraryForm?: React.Dispatch<
    React.SetStateAction<{
      destination: string;
      days: string;
      budget: string;
      markdown: string;
    }>
  >;
};

export default function Editor({
  isPreview = false,
  setItineraryForm,
  markdown
}: EditorProps) {


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
        className={clsx(
          "border-gray-600 border-1 rounded-lg w-full",
          theme === "dark" && "dark-theme dark-editor"
        )}
        markdown={markdown}
        plugins={[
          toolbarPlugin({
            toolbarContents: () => {
              if (isPreview) return null;

              return (
                <div className="flex flex-wrap">
                  <UndoRedo /> <BoldItalicUnderlineToggles /> <InsertTable />
                  <BlockTypeSelect /> <CreateLink />  <ListsToggle />
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
