import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BellRing, LogIn, Search } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
    return (
        <>
            <div className='flex justify-between p-4 border-b bg-white h-16'>
                <SidebarTrigger className='h-8 w-8 bg-black tex-black' />
                <div className='flex gap-4 items-center'>
                    <div className='flex w-full max-w-sm items-center border-gray-300 rounded-lg px-2.5 py-0.5'>
                        <Search className='h-4 w-4 mr-2' />
                        <Input
                            type='search'
                            placeholder='Buscar...'
                            className='w-full border-0'
                        />
                    </div>

                    <Button variant='outline' className="bg-black">
                        <BellRing />
                    </Button>
                    <SignedOut>
                        <SignInButton>
                            <Button>
                                <LogIn />
                                Iniciar sesión
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </>
    )
}