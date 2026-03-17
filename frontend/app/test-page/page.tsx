"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8000/test", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "message":"Frontend Reponse" }),
            });

            if (!res.ok) {
                console.log("Server Error")
                return;
            }

            const data = await res.json();

            if (data) {
                console.log(data.message);
            } else {
                console.log("Network Error")
            }
        } catch (err) {
            console.log("Network Error")
        }
    };
    return (
        <div className="flex min-h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex w-96 flex-col items-center gap-6 bg-slate-50"
            >
                <button
                    type="submit"
                >
                    Test Connection
                </button>
            </form>
        </div>
    );
}
