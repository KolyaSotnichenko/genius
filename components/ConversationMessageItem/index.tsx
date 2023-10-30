import { cn } from "@/lib/utils";
import { ChatCompletionRequestMessage } from "openai";
import { FC } from "react";
import UserAvatar from "../UserAvatar";
import BotAvatar from "../BotAvatar";

interface IConversationMessageItem {
  item: ChatCompletionRequestMessage;
}

const ConversationMessageItem: FC<IConversationMessageItem> = ({ item }) => {
  return (
    <div
      className={cn(
        "p-8 w-full flex items-start gap-x-8 rounded-lg",
        item.role === "user" ? "bg-white border border-black/10" : "bg-muted"
      )}
      key={item.content}
    >
      {item.role === "user" ? <UserAvatar /> : <BotAvatar />}
      <p className="text-sm">{item.content}</p>
    </div>
  );
};

export default ConversationMessageItem;
