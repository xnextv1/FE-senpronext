"use client"
import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import getChatSession from "../actions/get-chat-session"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface ChatSessionType{
  chat_session_id: string
  title: string
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [data, setData] = React.useState({
    navMain: [
      {
        title: "Home",
        url: "/home",
        items: [],
      },
      {
        title: "Chat",
        url: "/chat",
        items: [],
      },
      {
        title: "Resources & Guides",
        url: "/resources",
        items: [
          {
            title: "Favorites",
            url: "#",
          },
          {
            title: "Popular",
            url: "#",
          },
        ],
      },
      {
        title: "Escalation & Support",
        url: "#",
        items: [
          {
            title: "Escalation",
            url: "#",
          },
          {
            title: "Support",
            url: "#",
          },
        ],
      },
    ],
  })

  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    getChatSession()
      .then((chatSession) => {
        if (chatSession) {
          setData((prevData) => ({
            ...prevData,
            navMain: prevData.navMain.map((item) =>
              item.title === "Chat"
                ? {
                    ...item,
                    items: chatSession.map((session:ChatSessionType) => ({
                      title: session.title, // Adjust based on your chat session structure
                      url:  "/chat/" + session.chat_session_id, // Adjust based on your chat session structure
                    })),
                  }
                : item
            ),
          }))
        } else {
          console.error("No chat session data found")
        }
      })
      .catch((error) => {
        console.error("Error fetching chat session:", error)
      })
  }, [])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">NextBot</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Collapsible
                  className="group/collapsible"
                  open={!!openSections[item.title]}
                  onOpenChange={() => toggleSection(item.title)}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      <a href={item.url} className="font-medium">
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </Collapsible>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
