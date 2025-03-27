"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Register from "../actions/post-register"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    try{
    Register(email, password)
    }catch(e){
      console.log(e)
    }
  }

  return (  
    <div className={cn("flex flex-col gap-6 justify-center items-center", className)} {...props}>
      <Card className="w-[50%] flex flex-col justify-center">
        <CardContent className="p-0">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome To Next</h1>
                <p className="text-muted-foreground text-balance">
                  Ever needed to talk tok someone? You&apos;re in the right place.
                </p>
              </div>
              <div className="grid gap-3">
                <Label>Email</Label>
                <Input
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" 
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                placeholder="Password"
                required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input id="password" 
                type="password"
                placeholder="Password"
                required />
              </div>
              <Button onClick={(e) => {e.preventDefault(); onSubmit();}} className="w-full hover:bg-slate-600 bg-slate-800"> 
                Sign Up
              </Button>
          
              <div className="text-center text-sm">
              Have an account?{" "}
                <a href="login" className="underline underline-offset-4">
                  Sign In
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  )
}
