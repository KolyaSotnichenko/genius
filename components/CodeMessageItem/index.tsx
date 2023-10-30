import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";
import { FC } from "react";
import UserAvatar from "../UserAvatar";
import BotAvatar from "../BotAvatar";
import ReactMarkDown from "react-markdown";

interface ICodeMessageItem {
  item: ChatCompletionRequestMessage;
}

const CodeMessageItem: FC<ICodeMessageItem> = ({ item }) => {
  return (
    <div
      className={cn(
        "p-8 w-full flex items-start gap-x-8 rounded-lg",
        item.role === "user" ? "bg-white border border-black/10" : "bg-muted"
      )}
      key={item.content}
    >
      {item.role === "user" ? <UserAvatar /> : <BotAvatar />}
      <ReactMarkDown
        components={{
          pre: ({ node, ...props }) => (
            <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
              <pre {...props} />
            </div>
          ),
          code: ({ node, ...props }) => (
            <code className="bg-black/10 rounded-lg p-1 " {...props} />
          ),
        }}
        className="text-sm overflow-hidden leading-7"
      >
        {item.content || ""}
      </ReactMarkDown>
    </div>
  );
};

export default CodeMessageItem;
