'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { catInfoAtom } from '@/store/catStore';
import { Camera, Sparkles, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  src: string;
  title: string;
}

const photoData: PhotoItem[] = [
  {
    id: '1',
    src: '/coco_1.png',
    title: '창가에서 새 구경하기'
  },
  {
    id: '2',
    src: '/coco_2.png',
    title: '소파에서 편안하게 낮잠'
  },
  {
    id: '3',
    src: '/coco_3.png',
    title: '장난감 쥐와 사냥놀이'
  },
  {
    id: '4',
    src: '/coco_4.png',
    title: '참치 먹기'
  },
  {
    id: '5',
    src: '/coco_5.png',
    title: '카메라 응시하기'
  },
  {
    id: '6',
    src: '/coco_6.png',
    title: '창가에서 햇살 받기'
  }
];

export default function GalleryPage() {
  const [catInfo] = useAtom(catInfoAtom);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const openPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <section className="py-20 relative overflow-hidden">
        {/* 배경 장식 요소들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-amber-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-yellow-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-onfont">
              {catInfo.name}의 갤러리
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-4 border-amber-300">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800">
                사진 모음
              </h2>
              <Sparkles className="w-8 h-8 text-amber-500" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoData.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => openPhoto(photo)}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-4 border-orange-200 h-full">
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center p-2">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 font-onfont">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closePhoto}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border-4 border-orange-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePhoto}
                className="absolute top-4 right-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-orange-100 transition-colors border-2 border-orange-200"
              >
                <X size={24} className="text-orange-500" />
              </button>

              {/* Photo Display */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 font-onfont mb-4">
                    {selectedPhoto.title}
                  </h2>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    width={800}
                    height={800}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
