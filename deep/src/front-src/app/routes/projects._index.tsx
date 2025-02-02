import React, { useEffect, useState } from "react";

import Dashboard from "../components/dashboard/dashboard.tsx";
import { json, LoaderFunctionArgs, redirect } from "@remix-run/deno";
import { getSupabaseWithSessionAndHeaders } from "../lib/supabase-server.ts";
import { getProjects, insertProject } from "../lib/supabase-client.ts";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { headers, serverSession } = await getSupabaseWithSessionAndHeaders({
    request,
  });

  const projects = await getProjects();

  console.log(projects);

  if (!serverSession) {
    return redirect("/signin", { headers });
  }

  const userId = serverSession.user.id;

  return json({ success: true, projects, userId }, { headers });
};

const ProjectsPage = () => {
  const { projects, userId } = useLoaderData<typeof loader>();

  return <Dashboard Projects={projects} UserId={userId} />;
};

export default ProjectsPage;
