import {Avatar,AvatarFallback,AvatarImage} from "@/components/ui/avatar"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import clientComment from "./clientComment";

   
const OurClient = () => {
    
    return (
        <div className="mb-24 mt-20">

            <div>
                    <h1 className='text-5xl font-extrabold'>What Our Client Said about us</h1>
            </div>
            {/* card */}
            <div className="flex mt-12 p-10">
           
                    {
                        clientComment.map(user => 
                            <div className="rounded-lg " key={user.id}>
                                
                               
                                
                      
                                    <CardHeader className="flex flex-row items-center gap-6">
                                    <Avatar className="">
                                            <AvatarImage src={user.src} alt={user.alt} />
                                            <AvatarFallback>user</AvatarFallback>
                                    </Avatar>
                                    
                                    <div>
                                    <CardTitle>{user.name}</CardTitle>
                                        <CardDescription>{user.designation}</CardDescription>
                                        </div>
                                </CardHeader>
                                    <div className="font-">
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