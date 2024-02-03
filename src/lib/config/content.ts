import React from 'react';
import { CounselingContent, PyschAssessmentContent, AdoptionContent } from './services-content'

export const services = [
  {
    name: "counseling",
    label: "Counseling",
    content: CounselingContent(),
  },

  {
    name: "psychological-assessment",
    label: "Psychological Assessments",
    content: PyschAssessmentContent(),
  },
  {
    name: "somatic-therapy",
    label: "Somatic and Massage Therapy",
    title: "More Information coming soon",

    content: React.createElement("p", {
      className: "text-center text-lg"
    }, "More information coming soon!")
  },
  {
    name: "adoption",
    label: "Adoption",
    content: AdoptionContent(),
  },
];

// <p className= 'text-center text-lg' > More information coming soon!</ p >

export const recommendedBooks = [
  {
    href: "http://www.amazon.com/gp/product/0553386697/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0553386697&linkCode=as2&tag=adoptiocom-20&linkId=U7EAWIE5AZSFKGX5",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0553386697&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/0071475001/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0071475001&linkCode=as2&tag=adoptiocom-20&linkId=BYP5JMR23RUICXAM",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0071475001&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/0765704048/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0765704048&linkCode=as2&tag=adoptiocom-20&linkId=IQB2KQJVWAE4TY4M",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0765704048&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/0871137348/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0871137348&linkCode=as2&tag=adoptiocom-20&linkId=ZQQWBCHVULSFQNFS",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0871137348&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/044050838X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=044050838X&linkCode=as2&tag=adoptiocom-20&linkId=C5TRBKN3H2QJTYTM",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=044050838X&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/0977704009/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0977704009&linkCode=as2&tag=adoptiocom-20&linkId=KJ3FZM2TWVEW4DRM",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0977704009&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/039916510X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=039916510X&linkCode=as2&tag=adoptiocom-20&linkId=CO7BDIL67JJGXW4H",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=039916510X&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/B00E3F13TA/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00E3F13TA&linkCode=as2&tag=adoptiocom-20&linkId=503ff5f2ec68c33c23c47bde76a8de20",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00E3F13TA&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=adoptiocom-20",
  },
  {
    href: "http://www.amazon.com/gp/product/0688161170/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0688161170&linkCode=as2&tag=adoptiocom-20&linkId=PQQEQ25AUWLCBZL2",
    src: "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0688161170&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=adoptiocom-20",
  },
];