"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

function LinkButton({ href, text }: { href: string; text: string }) {
  return (
      <Button
        className="text-blue-600 "
        radius="full"  color="primary" variant="flat"
      ><Link href={href}>
        {text}
      </Link>
      </Button>

  );
}

export default LinkButton;
