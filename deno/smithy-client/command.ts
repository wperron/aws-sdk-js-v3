import { MiddlewareStack } from "../middleware-stack/mod.ts";
import {
  Command as ICommand,
  MetadataBearer,
  Handler,
  MiddlewareStack as IMiddlewareStack
} from "../types/mod.ts";

export abstract class Command<
  Input extends ClientInput,
  Output extends ClientOutput,
  ResolvedClientConfiguration,
  ClientInput extends object = any,
  ClientOutput extends MetadataBearer = any
>
  implements
    ICommand<
      ClientInput,
      Input,
      ClientOutput,
      Output,
      ResolvedClientConfiguration
    > {
  abstract input: Input;
  readonly middlewareStack: IMiddlewareStack<
    Input,
    Output
  > = new MiddlewareStack<Input, Output>();
  abstract resolveMiddleware(
    stack: MiddlewareStack<ClientInput, ClientOutput>,
    configuration: ResolvedClientConfiguration,
    options: any
  ): Handler<Input, Output>;
}
