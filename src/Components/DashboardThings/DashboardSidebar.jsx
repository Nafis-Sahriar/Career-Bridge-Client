"use client";
import {
  LayoutHeaderSideContent,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
  BriefcaseFill
} from "@gravity-ui/icons";
import Link from "next/link";
import { Button, Drawer } from "@heroui/react";
import { usePathname } from "next/navigation";


export function DashboardSidebar() {

    const pathname = usePathname();




  const navItems = [
    { icon: House, href: "/dashboard/recruiter", label: "Home" },
    { icon: Magnifier, href: "/dashboard/recruiter/jobs", label: "Listed Jobs" },
    { icon: Bell, href: "/dashboard/recruiter/jobs/new", label: "Post A Job" },
    { icon: BriefcaseFill, href: "/dashboard/recruiter/company", label: "Company Profile" },
    { icon: Envelope, href: "/dashboard/recruiter/messages", label: "Messages" },
    { icon: Person, href: "/dashboard/recruiter/profile", label: "Profile" },
    { icon: Gear, href: "/dashboard/recruiter/settings", label: "Settings" },
  ];



const navContent = (
  <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
      <Link
        href={item.href}
        key={item.label}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-300 ${
          pathname === item.href
            ? "bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-500 text-white shadow-lg"
            : "text-foreground hover:bg-default"
        }`}
      >
        <item.icon
          className={`size-5 ${
            pathname === item.href ? "text-white" : "text-muted"
          }`}
        />
        {item.label}
      </Link>
    ))}
  </nav>
);

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-default lg:block">
        {navContent}
      </aside>

      <div className="lg:hidden">
        <Drawer>
          <Button variant="secondary">
            <LayoutHeaderSideContent />
            Menu
          </Button>
          <Drawer.Backdrop>
            <Drawer.Content placement="left">
              <Drawer.Dialog>
                <Drawer.CloseTrigger />
                <Drawer.Header>
                  <Drawer.Heading>Navigation</Drawer.Heading>
                </Drawer.Header>
                <Drawer.Body>{navContent}</Drawer.Body>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}
