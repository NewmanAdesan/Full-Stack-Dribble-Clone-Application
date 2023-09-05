
import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type FooterColumnProps = {
  title: string,
  links: Array<string>,
}

const FooterColumn = ({title, links}:FooterColumnProps) => (
    <div className='footer_column'>

      {/* column heading */}
      <h4 className='font-semibold'>{title}</h4>

      {/* column links */}
      <ul className='flex flex-col gap-2 font-normal'>
        {links.map((link)=>(
          <Link href="/" key={link}>{link}</Link>
        ))}
      </ul>

    </div>
)



const Footer = () => {
  return (
    /* footer */
    <footer className='footer flexStart'>

        {/* footer inner */}
        <div className="flex flex-col gap-12">

            {/* footer-overview */}
            <div className='flex flex-col gap-5 items-start'>
              <Image
                      src="/logo-purple.svg"
                      width={115}
                      height={34}
                      alt="Flexibble"/>
              <p className='font-normal text-sm max-w-xs'>Flexibble is the world's leading community for creatives to share, grow and get hired</p>
            </div>

            {/* footer-links*/}
            <div className="flex flex-wrap gap-12">
              <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

              <div className='flex-1 flex flex-col gap-4'>
                <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
                <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
              </div>

              <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />

              <div className='flex-1 flex flex-col gap-4'>
                <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
                <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
              </div>

              <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />

            </div>

            {/* footer-footnote */}
            <div className='flexBetween footer_copyright'>
              <p>@2023 Flexibble. All rights reserved</p>
              <p className='text-gray'>
                <span className='text-black font-semibold'>10243</span> projects submitted
              </p>
            </div>

        </div>

    </footer>
  )
}

export default Footer