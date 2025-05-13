import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const params = new URL(req.url).searchParams;
    const project = params.get("project");
    const build = params.get("build");
    const region = "us-east-1";
    const buildURL = `https://${region}.console.aws.amazon.com/codesuite/codebuild/projects/${project}/build/${build}/?region=${region}`;
    return NextResponse.redirect(buildURL);
}
