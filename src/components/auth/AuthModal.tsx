"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/store";
import { login, register } from "@/redux/features/auth/authSlice";
import { Eye, EyeOff, Sparkles, Sprout, Store, User as UserIcon } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = "login",
}: AuthModalProps) {
  const dispatch = useAppDispatch();
  const [tab, setTab] = useState<"login" | "register">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regRole, setRegRole] = useState<"customer" | "seller">("customer");
  const [farmName, setFarmName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setFeedback("Please fill in both email and password.");
      return;
    }

    dispatch(
      login({
        user: {
          id: "usr-" + Date.now(),
          name: loginEmail.split("@")[0],
          email: loginEmail,
          role: "customer",
          avatar: "/assets/head.png",
        },
      })
    );
    setFeedback(null);
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      setFeedback("Please fill in all required fields.");
      return;
    }

    dispatch(
      register({
        user: {
          id: "usr-" + Date.now(),
          name: regName,
          email: regEmail,
          role: regRole,
          farmName: regRole === "seller" ? farmName || `${regName}'s Organic Farm` : undefined,
          avatar: "/assets/head.png",
        },
      })
    );
    setFeedback(null);
    onClose();
  };

  // One-click demo logins for instant testing
  const handleDemoLogin = (role: "customer" | "seller") => {
    if (role === "customer") {
      dispatch(
        login({
          user: {
            id: "demo-cust-1",
            name: "Sarah Johnson",
            email: "sarah@tablefresh.com",
            role: "customer",
            avatar: "/assets/head.png",
          },
        })
      );
    } else {
      dispatch(
        login({
          user: {
            id: "demo-sell-1",
            name: "Michael Green",
            email: "greenvalley@tablefresh.com",
            role: "seller",
            farmName: "Green Valley Farm",
            avatar: "/assets/head.png",
          },
        })
      );
    }
    setFeedback(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[440px] p-6 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center sm:text-center pb-2 border-b border-gray-100">
          <div className="mx-auto w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
            <Sprout className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {tab === "login" ? "Welcome Back!" : "Join Table Fresh"}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {tab === "login"
              ? "Access your farm-fresh basket and orders"
              : "Connect with local gardens and clean harvest"}
          </DialogDescription>
        </DialogHeader>

        {/* Tab switch */}
        <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl mt-2">
          <button
            type="button"
            onClick={() => {
              setTab("login");
              setFeedback(null);
            }}
            className={`py-2 text-sm font-semibold rounded-lg transition-all ${
              tab === "login"
                ? "bg-white text-emerald-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("register");
              setFeedback(null);
            }}
            className={`py-2 text-sm font-semibold rounded-lg transition-all ${
              tab === "register"
                ? "bg-white text-emerald-700 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Register
          </button>
        </div>

        {feedback && (
          <div className="p-3 text-xs rounded-lg bg-red-50 text-red-700 border border-red-200">
            {feedback}
          </div>
        )}

        {tab === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="focus-visible:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-emerald-600 hover:underline"
                  onClick={() => alert("Password reset link sent to demo.")}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="focus-visible:ring-emerald-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl shadow-sm hover:shadow"
            >
              Sign In to Account
            </Button>

            {/* Quick Demo Login shortcuts */}
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 text-center mb-2 flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Instant Demo Sign In
              </p>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin("customer")}
                  className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 flex items-center gap-1.5 justify-center"
                >
                  <UserIcon className="w-3.5 h-3.5" /> Buyer Demo
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleDemoLogin("seller")}
                  className="text-xs border-emerald-200 text-emerald-700 hover:bg-emerald-50 flex items-center gap-1.5 justify-center"
                >
                  <Store className="w-3.5 h-3.5" /> Seller Demo
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-3.5 mt-2">
            <div className="space-y-1.5">
              <Label htmlFor="reg-name">Full Name</Label>
              <Input
                id="reg-name"
                placeholder="John Doe"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                required
                className="focus-visible:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="reg-email">Email Address</Label>
              <Input
                id="reg-email"
                type="email"
                placeholder="john@example.com"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                required
                className="focus-visible:ring-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <Label>I want to join as:</Label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRegRole("customer")}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    regRole === "customer"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <UserIcon className="w-4 h-4" /> Customer / Buyer
                </button>
                <button
                  type="button"
                  onClick={() => setRegRole("seller")}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    regRole === "seller"
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <Store className="w-4 h-4" /> Farm / Producer
                </button>
              </div>
            </div>

            {regRole === "seller" && (
              <div className="space-y-1.5">
                <Label htmlFor="farm-name">Farm or Store Name</Label>
                <Input
                  id="farm-name"
                  placeholder="e.g. Sunny Acres Farm"
                  value={farmName}
                  onChange={(e) => setFarmName(e.target.value)}
                  className="focus-visible:ring-emerald-500"
                />
              </div>
            )}

            <div className="space-y-1.5">
              <Label htmlFor="reg-pass">Create Password</Label>
              <Input
                id="reg-pass"
                type="password"
                placeholder="At least 6 characters"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
                className="focus-visible:ring-emerald-500"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-xl shadow-sm hover:shadow mt-2"
            >
              Create Account
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

