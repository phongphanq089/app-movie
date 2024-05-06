import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='container-xl mx-auto'>
      <div className='w-full flex justify-center flex-col items-center '>
        <Image
          src={'/svg/not-found.svg'}
          width={800}
          height={800}
          alt='FAST MOVIE | Phim mới nhất tuyển chọn chất lượng cao, phim mới nhất 2024 vietsub cập nhật nhanh nhất.'
        />
        <h2 className='text-xl max-w-sm mb-4 text-center'>
          Xin Lỗi Trang Bạn Tìm Kiếm Hiện Tại Không Có Vui Lòng Quay Về Trang
          Chủ Để Tiếp Tục Trải Nghiệm!
        </h2>
        <Link href='/' className='py-1 px-2 font-bold bg-color-2 rounded-xl '>
          Về Trang Chủ
        </Link>
      </div>
    </div>
  )
}
