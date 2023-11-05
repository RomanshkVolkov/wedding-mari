import React from 'react';
import {
   Modal,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   useDisclosure,
} from '@nextui-org/react';

interface ModalComponentProps {
   children: React.ReactNode;
   title: string;
   size?: string;
   action?: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
   children,
   title,
   size = '5xl',
   action,
}) => {
   const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'full'];
   const ISizes = { ...sizes } as const;
   type TSize = (typeof ISizes)[keyof typeof ISizes];

   const { isOpen, onOpen, onClose } = useDisclosure();

   const handleOpen = (size: TSize) => {
      onOpen();
   };
   return (
      <>
         <div className="flex flex-wrap gap-3">
            <Button key={size} onPress={() => handleOpen(size)}>
               Location
            </Button>
         </div>
         <Modal size={size as any} isOpen={isOpen} onClose={onClose}>
            <ModalContent>
               {(onClose) => (
                  <>
                     <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                     <ModalBody>{children}</ModalBody>
                     <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                           Close
                        </Button>
                        {action && (
                           <Button color="primary" onPress={action}>
                              Action
                           </Button>
                        )}
                     </ModalFooter>
                  </>
               )}
            </ModalContent>
         </Modal>
      </>
   );
};
