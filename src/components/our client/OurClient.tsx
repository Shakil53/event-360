import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import clientComment from "./clientComment";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

   
const OurClient = () => {
    
    return (
        <div className="mb-24 mt-20 p-8">

            <div className="flex justify-between">
                <h1 className='text-5xl font-extrabold'>What Our Client Said about us</h1>
                <Button variant="outline" className="" size="sm">
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 p-10 justify-center items-center">
           
                    {
                        clientComment.map(user => 
                            <div className="rounded-lg " key={user.id}>
                                
                               
                                
                      
                                    <CardHeader className=" ">
                                    <Avatar className="">
                                            <AvatarImage src={user.src} alt={user.alt} />
                                            <AvatarFallback>user</AvatarFallback>
                                    </Avatar>
                                    
                                    <div>
                                    <CardTitle>{user.name}</CardTitle>
                                        <CardDescription>{user.designation}</CardDescription>
                                        </div>
                                </CardHeader>
                                    <div className="font-sans">
                                        <CardDescription>{user.com}</CardDescription>
                                    </div>
                           
                            
                            
                            </div>

                        )
                    }
                 
           
                
            </div>
        </div>
    );
};

export default OurClient;