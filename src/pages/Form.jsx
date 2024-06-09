import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { cn } from "../lib/utils";
import { Calendar } from "../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";

import { Button } from "../components/ui/button";

export default function FormPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [date, setDate] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      accountType: accountType,
    };
    console.log(formData); // Here you can perform your desired actions with the form data
  };

  return (
    <div className="w-full py-12  flex items-start  justify-center">
      <div className="flex items-center justify-center  max-w-2xl w-full border p-2 md:p-4 rounded ">
        <div className="mx-auto grid  gap-6 w-full">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Form</h1>
            <p className="text-balance text-muted-foreground">
              Please Give us your information
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>{" "}
              <div className="grid gap-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>{" "}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>{" "}
            <div className="grid gap-2">
              <Label htmlFor="account-type">Account Type</Label>
              <Select>
                <SelectTrigger id="account-type">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    value="individual"
                    onClick={() => setAccountType("individual")}
                  >
                    Individual
                  </SelectItem>
                  <SelectItem
                    value="business"
                    onClick={() => setAccountType("business")}
                  >
                    Business
                  </SelectItem>
                  <SelectItem
                    value="enterprise"
                    onClick={() => setAccountType("enterprise")}
                  >
                    Enterprise
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>{" "}
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="system">System</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="assistant">Assistant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="account-type">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="w-full"
                  />
                </PopoverContent>
              </Popover>
            </div>{" "}
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
