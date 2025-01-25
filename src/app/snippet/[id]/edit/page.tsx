
import EditSnippetForm from "@/components/EditSnippetForm";
import React from "react";
import { prisma } from "@/lib/prisma";

const page =  async ({params}:{
    params: Promise<{ id: string }>;
  }) => {

    const id = parseInt((await params).id);
    const snippet = await prisma.snippet.findUnique({
        where: {
          id,
        },
      });

    if (!snippet) return <h1>Snippet Not Found</h1>;
  return (
    <div>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default page;
