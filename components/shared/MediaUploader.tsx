import { useToast } from "@/components/ui/use-toast"
import { CldUploadWidget } from 'next-cloudinary'
import React from "react"

type MediaUploaderProps = {
    onValueChange: (value: string) => string;
    setImage: React.Dispatch<any>;
    
}

const MediaUploader = ({
    onValueChange,
    setImage,
    image,
    publicId,
    type
}: MediaUploaderProps) => {
    const { toast } = useToast()

    const onUploadSuccessHandler = (result: any) => {
        toast({
            title: 'Image uploaded successfully',
            description: '1 credit was deducted from your account',
            duration: 5000,
            className: 'success-toast'
        })
    }

    const onUploadErrorHandler = () => {
        toast({
            title: 'Something went wrong while uploading',
            description: 'Please try again',
            duration: 5000,
            className: 'error-reset'
        })
    }

    return (
    <CldUploadWidget
        uploadPreset='kb_remodify'
        options={{
            multiple: false,
            resourceType: "image"
        }}
        onSuccess={onUploadSuccessHandler}
        onError={onUploadErrorHandler}
    >
    {({ open }) => (
        <div className='flex flex-col gap-4'>+
            <h3 className="h3-bold text-dark-600">
                Original
            </h3>
            {publicId}
        </div>
    )}
    </CldUploadWidget>
  )
}

export default MediaUploader