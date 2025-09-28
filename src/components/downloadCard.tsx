import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle, Send, Instagram } from "lucide-react";

type downloadcardProps = {
  downloadLink: string,
  LicenceInfo: {title:string,desc:string,whatsaap:string,instagram:string,telegram:string},
  title: string,
  desc: string
}

type downloadcardsProps = {
  downloadcard: downloadcardProps
}

const DownloadCard = ({ downloadcard }: downloadcardsProps) => {
  const handleDownload = () => {
    const fileId = downloadcard.downloadLink; 
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadUrl, '_blank');
  };

  const handleWhatsApp = () => {
    // Add your WhatsApp logic here
    const whatsaap = downloadcard.LicenceInfo.whatsaap;
    window.open(whatsaap, '_blank');
  };

  const handleTelegram = () => {
    // Add your Telegram logic here
    console.log('Telegram clicked');
  };

  const handleInstagram = () => {
    // Add your Instagram logic here
    console.log('Instagram clicked');
  };

  return (
    <section className=" px-6 max-w-5xl mx-auto">
      <div className="w-full max-w-sm mx-auto sm:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-5xl">
        {/* Tutorial Links Card */}
        <div className="  rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
             {downloadcard.title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {downloadcard.desc} 
            </p>
            
            {/* Centered Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                variant="default"
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Download
              </Button>
              
              {/* License Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className=" hover:bg-gray-500  px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    Get License
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{downloadcard.LicenceInfo.title}</DialogTitle>
                    <DialogDescription>
                      {downloadcard.LicenceInfo.desc}
                    </DialogDescription>
                  </DialogHeader>

                  
                  {/* Social Media Buttons */}
                  <div className="flex justify-center gap-3 py-4">
                    <Button
                      variant="outline"
                      onClick={handleWhatsApp}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-green-50 hover:border-green-300 transition-colors duration-200 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 text-green-600" />
                      WhatsApp
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleTelegram}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-200 cursor-pointer"
                    >
                      <Send className="h-4 w-4 text-blue-600" />
                      Telegram
                    </Button>
                    
                    <Button
                      variant="outline"
                      onClick={handleInstagram}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 hover:border-pink-300 transition-colors duration-200 cursor-pointer"
                    >
                      <Instagram className="h-4 w-4 text-pink-600" />
                      Instagram
                    </Button>
                  </div>
                  
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadCard;