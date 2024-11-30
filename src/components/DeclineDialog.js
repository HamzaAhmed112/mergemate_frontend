"use client";

import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function DeclineDialog() {
    const [reason, setReason] = useState("");

    const handleSubmit = () => {
        alert(`Reason for Decline: ${reason}`);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>Reason of Decline</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input
                        type="text"
                        placeholder="Enter reason of decline"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600" onClick={() => setReason("")}>
                        Cancel
                    </Button>
                    <Button
                        className="bg-green-500 text-white hover:bg-green-600"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
