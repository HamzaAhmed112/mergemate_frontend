import LoginForm from '@/components/LoginForm'

export default function LoginPage() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md">
                <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">MergeMate</h1>
                <LoginForm />
            </div>
        </div>
    )
}

