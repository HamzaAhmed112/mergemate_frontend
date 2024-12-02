"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ReusablePopupDialog({ text, triggerText = "Open Dialog" }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={handleToggle}>{triggerText}</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Notification</DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-700">{text}</p>
                    <DialogFooter>
                        <Button onClick={handleToggle}>OK</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
