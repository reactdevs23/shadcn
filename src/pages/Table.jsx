// src/pages/TablePage.js
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const TablePage = () => {
  const data = [
    {
      inovoice: "Invoice",
      status: "Paid",
      method: "Credit Card",
      account: "",
    },
    {
      inovoice: "Invoice",
      status: "Paid",
      method: "Credit Card",
      account: "",
    },
    {
      inovoice: "Invoice",
      status: "Paid",
      method: "Credit Card",
      account: "",
    },
    {
      inovoice: "Invoice",
      status: "Paid",
      method: "Credit Card",
      account: "",
    },
  ];
  return (
    <div className=" flex flex-col py-12 max-w-4xl mx-auto gap-8	">
      <div className="grid gap-2">
        <h1 className="text-3xl font-bold">Table</h1>
        <p className="text-balance text-muted-foreground">
          Please Give us your information
        </p>
      </div>
      <Table className="w-full mx-auto   border p-20	rounded ">
        <TableHeader className="p-16">
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Account</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.inovoice}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.method}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    Open
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TablePage;
