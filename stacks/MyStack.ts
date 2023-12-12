import { StackContext, Function } from "sst/constructs";

export function API({ stack }: StackContext) {
  const fn = new Function(stack, "fn", {
    runtime: "python3.9",
    handler: "src/lambda-python/handler.handler",
    url: true,
  });

  stack.addOutputs({
    URL: fn.url,
  });
}
