export interface Paper {
  id: string;
  name: string;
  type: 'FAT' | 'CAT-2' | 'CAT-1';
  year: number;
  url: string;
}

export interface Course {
  code: string;
  name: string;
  category: 'Core Engineering' | 'Basic Sciences' | 'Elective' | 'Hardware';
  semester: string;
  papersCount: number;
  papers: Paper[];
}

export const coursesData: Course[] = [
  {
    "code": "CSE1008",
    "name": "TOC",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse1008-fat-1",
        "name": "2026-FAT",
        "type": "FAT",
        "year": 2026,
        "url": "https://drive.google.com/file/d/1ZXY2ywUv0igPevhKfkhn_P4Dmb-fbTvx/view?usp=drivesdk"
      },
      {
        "id": "cse1008-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1COaC3T4utobkG86qNOlZSoL9fnliQCEM/view"
      },
      {
        "id": "cse1008-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1LdZ3IKdoYkmiBtIkSZLm87seYKDgab_T/view"
      },
      {
        "id": "cse1008-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1KEioY3MvfNz8_P-GRNnu7-xyRJb9H_pu/view"
      },
      {
        "id": "cse1008-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/10tx29JcIRzuKaT1yUuNi2onLYoaF0s_x/view"
      },
      {
        "id": "cse1008-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EvScjEl1YZourW9SZ3gXCzIPOTWJjOrW/view"
      }
    ]
  },
  {
    "code": "CSE4004",
    "name": "Web Tech",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse4004-fat-1",
        "name": "2026-FAT",
        "type": "FAT",
        "year": 2026,
        "url": "https://drive.google.com/file/d/1wjxHjOMtRCg05stRgVT2n0TPKlj7VfwH/view?usp=drivesdk"
      },
      {
        "id": "cse4004-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1cF-s8kU671dkcB0WNfjVxpzeu7ZhiGiQ/view?usp=drivesdk"
      },
      {
        "id": "cse4004-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1rJW_byoY25hgx-Mggy96A707_hQPGyre/view?usp=drivesdk"
      },
      {
        "id": "cse4004-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/18Gm980jLiSfuqKyb2c7iqOcDZZRYpYhI/view?usp=drivesdk"
      },
      {
        "id": "cse4004-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/12IV40Pwy84uPMWY2z-tkM21ozByYf1qN/view?usp=sharing"
      },
      {
        "id": "cse4004-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1Rrj8W0_YTjdulIbMhSleGWKi-QoYu1Ke/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE2013",
    "name": "ITC",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse2013-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ta-lh18ur_lo6vaOR07tb5K6FXnWewgM/view?usp=drivesdk"
      },
      {
        "id": "cse2013-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/12P0-9YA8ob6Fzjtv0s7VJ6wMjI7iDkcY/view?usp=drivesdk"
      },
      {
        "id": "cse2013-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1QjNs6IDABFiN1eJAGHmhjs3aejgJW0sz/view?usp=drivesdk"
      },
      {
        "id": "cse2013-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1no1IkglCe0p1uupiFjlK0r8rTcYMVFMV/view?usp=drivesdk"
      },
      {
        "id": "cse2013-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1GgrpYOYV2JyvI6mCEoxARCgPatvopMhw/view?usp=drivesdk"
      },
      {
        "id": "cse2013-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1XxCFgEZ77yksIevYK4jTLZGuEqvtPDP9/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "STS4006",
    "name": "STS",
    "category": "Elective",
    "semester": "Winter 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "sts4006-fat-1",
        "name": "🚀 ALL CODES",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/18CeAjaYfppQmd7ALuzyBez4jZ07PFvdd/view?usp=sharing"
      }
    ]
  },
  {
    "code": "PHY2003",
    "name": "CMP",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 3,
    "papers": [
      {
        "id": "phy2003-cat-2-1",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VDk2E53fuc_AR2-UxY1mqZRpXUc1tkCb/view?usp=drivesdk"
      },
      {
        "id": "phy2003-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1X8uGXk8iZihJ4VOBAMVj0lxXG4SHCdg4/view?usp=drivesdk"
      },
      {
        "id": "phy2003-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1_-kCniFLCLfJpth6LK7K540HsQZOMSiG/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE3008",
    "name": "ML",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse3008-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1OtJ8U5WwSi3iUQB4sR80-5Z_QjNknBuo/view?usp=drivesdk"
      },
      {
        "id": "cse3008-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1E7YSrB6fQc4E6GiKxXD2DbrUodY4PSLj/view?usp=sharing"
      },
      {
        "id": "cse3008-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1Df7B-U3_GNzVUedY1n421rly7US__pEs/view?usp=sharing"
      },
      {
        "id": "cse3008-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EGHFpA3G01Y_HgnTEIfjcdS9o-tKglcf/view?usp=sharing"
      },
      {
        "id": "cse3008-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1v8_EZb5jHSgX4f5G1rDOO303goIEBNli/view?usp=drivesdk"
      },
      {
        "id": "cse3008-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1E6EhAK5byd8aOpWwV6c9XQQuXGPTePf8/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE3009",
    "name": "NoSQL",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse3009-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16C4JsIp7WLlvLnnzI7XduV8GqNslQHLW/view?usp=drivesdk"
      },
      {
        "id": "cse3009-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1YuDfqjrmcA26DzE6BUR8lkCKQHJEoqSm/view?usp=drivesdk"
      },
      {
        "id": "cse3009-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1guptZuNwk5Y1OiJ7f2sxwDwJjiVplqyP/view?usp=drivesdk"
      },
      {
        "id": "cse3009-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1h6uPyAryLprGQeBJrlm7247qfq-UajNr/view?usp=drivesdk"
      },
      {
        "id": "cse3009-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1Y9yKeZlNAnYaLCHsFDIX59IAbdZRpdGO/view?usp=drivesdk"
      },
      {
        "id": "cse3009-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gyGINzis2-6KeEr8jd_IQyk2R6aYHU1O/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE2009",
    "name": "Soft Computing",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse2009-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1XAqB_cfU5z45P6atSeVoETApplB-p8ju/view?usp=drivesdk"
      },
      {
        "id": "cse2009-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16R-qaerdPHk_-_huAOl8yVLqM_WjXQBl/view?usp=drivesdk"
      },
      {
        "id": "cse2009-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16NMraELQ3I5en49xx94ymAiYAP8rzrnh/view?usp=drivesdk"
      },
      {
        "id": "cse2009-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16ROv9CWlErBi6uNYei5oob5DV-amnQ_g/view?usp=drivesdk"
      },
      {
        "id": "cse2009-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/12yn4Fbz8kMTH6TUd5m-erfThUNNVgKem/view?usp=drivesdk"
      },
      {
        "id": "cse2009-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16NM0Z_7oA9Mt-BOu_XK8Dat6uHmEp-Ss/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE4016",
    "name": "Database Administartion",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 5,
    "papers": [
      {
        "id": "cse4016-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1FrTKZxDVwWU7YKcJ07ehAitbFTcO1rEh/view?usp=drivesdk"
      },
      {
        "id": "cse4016-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1_H6PbptV2uUWHEbYsv4NqSa-PkDLaNKR/view?usp=drivesdk"
      },
      {
        "id": "cse4016-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1TuTTVp8t3YAjUM_EZLYtlGtD-lq7Fcbd/view?usp=drivesdk"
      },
      {
        "id": "cse4016-cat-1-4",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16jJS0gJ6IW4eB2fudf6zy4DR-FbT6pMj/view?usp=drivesdk"
      },
      {
        "id": "cse4016-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1RBuPWbRmTIKQ_CRDfFFwnUAQhT28QB5L/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "MAT2003",
    "name": "Optimization Techniques",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 5,
    "papers": [
      {
        "id": "mat2003-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ehLiJEcqefP1nahiUhZqhEczZaqq7qJh/view?usp=drivesdk"
      },
      {
        "id": "mat2003-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/19PmQ3RjrPIGlL1F6f4iL7C0wNoVUi-_w/view?usp=drivesdk"
      },
      {
        "id": "mat2003-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1MOez-8pOa-lc1JjWQ-fEOW_PKZH-DIvS/view?usp=drivesdkk"
      },
      {
        "id": "mat2003-cat-1-4",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1GNrhnURmt8IQAHql8Lk94uoMlRQ5IZ3T/view?usp=drivesdk"
      },
      {
        "id": "mat2003-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fjpZGt9ok6OlLamWOvhyXeMTYpKpz0Yl/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE3015",
    "name": "NLP",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse3015-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1PdFwdxTeoCa2NyvZBzowBgQ3ZGlvHu9l/view?usp=drivesdk"
      },
      {
        "id": "cse3015-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ufoZXFCG8omTicg_Dbg8u1ZdA_kqcO3I/view?usp=drivesdk"
      },
      {
        "id": "cse3015-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/12z_lOVpqmyNaE0_83dxBXes0xokih_9Q/view?usp=drivesdk"
      },
      {
        "id": "cse3015-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1sr5KZLIfC4rlF6tXRWT1wYOgyUaYyZWl/view?usp=drivesdk"
      },
      {
        "id": "cse3015-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1BN1q8ypkbNKiMLfAsXv8g1jDoqJ4Gsfq/view?usp=drivesdk"
      },
      {
        "id": "cse3015-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14nK-sTwJ-CaRiXPMbkwCUZwtg9WbGkTr/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE2008",
    "name": "OS",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 7,
    "papers": [
      {
        "id": "cse2008-fat-1",
        "name": "2025-FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1drw6zISpvUQRkei52QXLETKhfZOBILiy/view?usp=drivesdk"
      },
      {
        "id": "cse2008-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1f7oSd8ipByZ88_c75ykAEJdDFykYcELV/view?usp=drivesdk"
      },
      {
        "id": "cse2008-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1f8pRTqDykgCgTyX-Nm7ISI2oaH0jhiXb/view?usp=drivesdk"
      },
      {
        "id": "cse2008-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1f4DscOKqzNx_8yTJn5_qthfkpDS1QZu3/view?usp=drivesdk"
      },
      {
        "id": "cse2008-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fFtSHSx76lnXwbhqFeEXPUFcYVQL5zRQ/view?usp=drivesdk"
      },
      {
        "id": "cse2008-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1f-dG6cknqWS5tdQmLgBLqhn13BevXq47/view?usp=drivesdk"
      },
      {
        "id": "cse2008-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1f3lRbRHjbfMrcRFDTE6l_pfU7DOrfYI3/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE3003",
    "name": "Computer Networks",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 7,
    "papers": [
      {
        "id": "cse3003-fat-1",
        "name": "2025-FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/17qLSLo_6GT0tdkj_QvYwKg7x8TuAgf2x/view?usp=drivesdk"
      },
      {
        "id": "cse3003-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fZkfkqhgSCmr58zupNI8_IocBz2KodpE/view?usp=drivesdk"
      },
      {
        "id": "cse3003-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fnpegqS9tCspPhNrfW4JsZ8gbmHzaAUd/view?usp=drivesdk"
      },
      {
        "id": "cse3003-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VYuVU6Kk_BkaEqTASf2S83odbyD9nwKa/view?usp=drivesdk"
      },
      {
        "id": "cse3003-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fcFLB6Xz_SvAJESay7Rrwg3btv8bLBAZ/view?usp=drivesdk"
      },
      {
        "id": "cse3003-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1XLps_WeBR6wP0lPMBU9M-RuZJZRJg0Mn/view?usp=drivesdk"
      },
      {
        "id": "cse3003-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fY9tmBdO8QeZMH8OypihD2BzGlw3bvQ8/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE3004",
    "name": "DAA",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 7,
    "papers": [
      {
        "id": "cse3004-fat-1",
        "name": "FAT-2025",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1AVohHQg2fdWb8-WfZbu7vc5gDP4ZLDlG/view?usp=drivesdk"
      },
      {
        "id": "cse3004-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fs0FWywIsyzhflKo4YCnU8fEaScEcdaF/view?usp=drivesdk"
      },
      {
        "id": "cse3004-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1g1vXKuR7IdN1vkiU15mhK5TdtFOXiXbj/view?usp=drivesdk"
      },
      {
        "id": "cse3004-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fpkilNllUtND5pZW5oAnxKWIpaZ776XD/view?usp=drivesdk"
      },
      {
        "id": "cse3004-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1g4mcp9Agbhl8YeTVTWmZO5PFXsFQVhsV/view?usp=drivesdk"
      },
      {
        "id": "cse3004-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1fqtWjjnjY6PbNOOrkZEYjGx91jJFh3ja/view?usp=drivesdk"
      },
      {
        "id": "cse3004-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1g-gEeV3DN_pOcZRtaEXNNuXAto3szqKx/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE4006",
    "name": "Deep Learning",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 7,
    "papers": [
      {
        "id": "cse4006-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gN-e6OqveLmEdz6ZiHCTv9JNbQz7NZcS/view?usp=drivesdk"
      },
      {
        "id": "cse4006-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gO1kyRWHK3ROgn2VszpHTj67eIUjsL70/view?usp=drivesdk"
      },
      {
        "id": "cse4006-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gAOJWHpTzmSzsovMfmYsM8aZBz7rt47U/view?usp=drivesdk"
      },
      {
        "id": "cse4006-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gQOg_aO60zH9WUZmxhZL8RVLobrfq5UD/view?usp=drivesdk"
      },
      {
        "id": "cse4006-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gDVaKcypt8D6hmjhMy8aaUI3D2kh6gpw/view?usp=drivesdk"
      },
      {
        "id": "cse4006-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gDVaKcypt8D6hmjhMy8aaUI3D2kh6gpw/view?usp=drivesdk"
      },
      {
        "id": "cse4006-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1gAe58HP67BE3hzyJGz-Q6n26Mx4DdUIm/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE4012",
    "name": "UI / UX",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse4012-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hVIwut_0GbSjZr4ztoH1aJkijci38V98/view?usp=drivesdk"
      },
      {
        "id": "cse4012-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hYF1kaXtaHbJ1rOPUPMJLR290vzXGDCb/view?usp=drivesdk"
      },
      {
        "id": "cse4012-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hVpj32ZyC0vSngseF-HEQ-1gWke_qXIm/view?usp=drivesdk"
      },
      {
        "id": "cse4012-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hZ-l5SnAitQfNNqn1R-1gNM6wdsbTpBe/view?usp=drivesdk"
      },
      {
        "id": "cse4012-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hWv4D476N620OCpWIYI3l3zFZjR8exPh/view?usp=drivesdk"
      },
      {
        "id": "cse4012-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1hcVpb2hMqYIT-b3dRFvyy2jD9Rx182wC/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "FRL1001",
    "name": "French",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 9,
    "papers": [
      {
        "id": "frl1001-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16gDGO9SN-Oj9pm0IuyYKatl7ZpQhDhFA/view?usp=drivesdk"
      },
      {
        "id": "frl1001-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1sbGTHG_jn_LnwBqNCskfVXe2TIxxhmJT/view?usp=drivesdk"
      },
      {
        "id": "frl1001-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1sUp73zP1QaRkjbdCsbiD-eUREC6oll9I/view?usp=drivesdk"
      },
      {
        "id": "frl1001-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1s_jn7i_UdxCbHmijTxIQB8v_McZzDRjY/view?usp=drivesdk"
      },
      {
        "id": "frl1001-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1sngsYliKFzPldE1CE5776kCotCUbwg3y/view?usp=drivesdk"
      },
      {
        "id": "frl1001-cat-2-6",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16TNfAv7WzA-C5a_oY_-6mLyFV7K9JY3N/view?usp=drivesdk"
      },
      {
        "id": "frl1001-cat-2-7",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16azg7eZYsBc5dAKl5qXrlvoRf7dFWD9E/view?usp=drivesdk"
      },
      {
        "id": "frl1001-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16TyeK1hFYZ5IXBwDee_5bqofQARi6DPI/view?usp=drivesdk"
      },
      {
        "id": "frl1001-cat-1-9",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16jUfgV4_pw9FDjIP2AxGPK9LwhGBH-Wv/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "FRL1004",
    "name": "Spanish",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "frl1004-cat-2-1",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mJfeCX60gUU_xieC-tnIa4kkQXe20KeS/view?usp=drivesdk"
      },
      {
        "id": "frl1004-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1R8FiQQqobt-WrfOyQnwvZv1eS6CZSAHg/view?usp=drivesdk"
      },
      {
        "id": "frl1004-cat-1-3",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1FZFHT_wFOLr-dOhnMU1wUFTIW_oV7QHt/view?usp=drivesdk"
      },
      {
        "id": "frl1004-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mIj7jPmDLAD8vKcngLeRHRIwA-IE-QzD/view?usp=drivesdk"
      },
      {
        "id": "frl1004-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1D0hpYeXmsY7s4LIXDiwVLjmqxEJTORbf/view?usp=drivesdk"
      },
      {
        "id": "frl1004-cat-1-6",
        "name": "CAT-1-2 AND FAT",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1m4pprDpfwBbM337Ov0T7oXNVyKO0waXl/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "FRL1005",
    "name": "German",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "frl1005-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mQGT8mOeSsV20_ZBhhZiMOv3cD34EEzC/view?usp=drivesdk"
      },
      {
        "id": "frl1005-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mVDN-IZ1PXU3Sc86mTghcXSyxw_UVWuU/view?usp=drivesdk"
      },
      {
        "id": "frl1005-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1m7ZVEz04h6qdwGP4MEM_Ctyz-96fSQI5/view?usp=drivesdk"
      },
      {
        "id": "frl1005-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mQpkoqK4Nt1gUlcJrdCv5qFZh3Ge1Qo1/view?usp=drivesdk"
      },
      {
        "id": "frl1005-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mPar_MMOuvALAe4akTfxTTgPbl6GTxz6/view?usp=drivesdk"
      },
      {
        "id": "frl1005-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mRgKbOsQ97mVRXK1MsQ1bS5mGAJ6bX0h/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "FRL2002",
    "name": "French",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 5,
    "papers": [
      {
        "id": "frl2002-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mcCoGjhrf6x5yt0AE7ogbhIDVOHLmBxN/view?usp=drivesdk"
      },
      {
        "id": "frl2002-cat-2-2",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mVfeapJKjZMpZ8JDyZ6AqU0tfEXDhXS6/view?usp=drivesdk"
      },
      {
        "id": "frl2002-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mZ27lFPKdVVwZJshtCbXt6R73boYIOyo/view?usp=drivesdk"
      },
      {
        "id": "frl2002-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mXpeIRCo9FG1dimxRzlQgYhIKJ9CARZq/view?usp=drivesdk"
      },
      {
        "id": "frl2002-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mctnG6YGI1jM25hUKd7gw-Kwu37i6G8u/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "FRL2004",
    "name": "Korea",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "frl2004-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mpQWWxPAZNguPYikfYpvlF3sltsqSJOI/view?usp=drivesdkk"
      },
      {
        "id": "frl2004-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1msNuvPU-2jT3pg3tB7_2MYOHJSywVpkM/view?usp=drivesdk"
      },
      {
        "id": "frl2004-cat-2-3",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mlll8k4bWHO78puRt4ItwvRL9StD4c5T/view?usp=drivesdk"
      },
      {
        "id": "frl2004-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mZ27lFPKdVVwZJshtCbXt6R73boYIOyo/view?usp=drivesdk"
      },
      {
        "id": "frl2004-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1mm3zF2L0QjRY6Kf4ObYMRH9w438xpHji/view?usp=drivesdk"
      },
      {
        "id": "frl2004-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1msNuvPU-2jT3pg3tB7_2MYOHJSywVpkM/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE4007",
    "name": "Image Processing",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse4007-cat-2-1",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1lQcMLmUuI5ExdRTIle_7Ue9Fj1bvGLr8/view?usp=drivesdk"
      },
      {
        "id": "cse4007-cat-2-2",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1l_RtiR7DRApNmjmFIV5gTO8Ml2Oykoyp/view?usp=drivesdk"
      },
      {
        "id": "cse4007-cat-1-3",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1lRnUOiZ0NffqK670OCjFeX9N5LXPrKWX/view?usp=drivesdk"
      },
      {
        "id": "cse4007-cat-1-4",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1lacO34uklZe5bQuEm6w3a7EWCVTHROJV/view?usp=drivesdk"
      },
      {
        "id": "cse4007-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1lU7PQx_mM1W2kxUz-ENQ1L8gL6mtKRhH/view?usp=drivesdk"
      },
      {
        "id": "cse4007-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1lcOR_4aY828okRWOYuN_rMSoIrf5205o/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE2007",
    "name": "DBMS",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 9,
    "papers": [
      {
        "id": "cse2007-fat-1",
        "name": "29-04-2025-A1-SLOT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1PV6L9VYcRnhJ5tG53RSLqW0U1QDZV1Y2/view?usp=drivesdk"
      },
      {
        "id": "cse2007-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14ppSwr-nY5iIkCIBewfM1kR8pFC0475L/view?usp=drivesdk"
      },
      {
        "id": "cse2007-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14rBwH-y_XeDwDIZyBJ5gmXZsS2TOOWZi/view?usp=drivesdk"
      },
      {
        "id": "cse2007-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14bo_n1KhEpZWmhxcN_HPUjCImtaO3rO4/view?usp=drivesdk"
      },
      {
        "id": "cse2007-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14U0NG_AUP5HOrCpPdWsx97EnvqOKSD5V/view?usp=drivesdk"
      },
      {
        "id": "cse2007-cat-2-6",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14baPD-2dhf7oL2KndNfZjFX-mw8QAW-B/view?usp=drivesdk"
      },
      {
        "id": "cse2007-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14obimUvAjWUCR4O-SG0UwL8ivGcEuXQp/view?usp=drivesdk"
      },
      {
        "id": "cse2007-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14YhDwyhRsk_rFokb-UurkVzLSwq5vO2X/view?usp=drivesdk"
      },
      {
        "id": "cse2007-cat-1-9",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14o8ldr2MfM7C7QFP1pNwMiUCH2BKQI0U/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE1005",
    "name": "SE",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 9,
    "papers": [
      {
        "id": "cse1005-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/152l7Si6xjSWYgLBr-UUjhnfCI6Hcdj4y/view?usp=drivesdk"
      },
      {
        "id": "cse1005-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15KctiTyRmzMz7UH1HHYC8BAfami5wCHo/view?usp=drivesdk"
      },
      {
        "id": "cse1005-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/154Trb_2pnSS3-EzH7b0kfh9ifa-6T0JV/view?usp=drivesdk"
      },
      {
        "id": "cse1005-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15LGJUwm7Qr83Oi3mZXrwJiVGn09EPzxO/view?usp=drivesdk"
      },
      {
        "id": "cse1005-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1561Gxr5Wz0g_3H2nidhlrziS5RKETBLK/view?usp=drivesdk"
      },
      {
        "id": "cse1005-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/154dXuhueE60bP_tlfD5TIny2_oz-kjyP/view?usp=drivesdk"
      },
      {
        "id": "cse1005-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14uoqFnHJ3jVjR5T7nUIrVzYqVWlhQzN5/view?usp=drivesdk"
      },
      {
        "id": "cse1005-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14vBAxulmvUsTAX5PeXgXcJxt8Cdw59Ug/view?usp=drivesdk"
      },
      {
        "id": "cse1005-cat-1-9",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15L6TktrjesbTKs1y0ZJpOMkQgDyP9oIk/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE1006",
    "name": "Data Analytics",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 5,
    "papers": [
      {
        "id": "cse1006-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1aUYFYAe9172tzIyw0HZ00ffZzYz2NnuV/view?usp=sharing"
      },
      {
        "id": "cse1006-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1a3AxybvQ7eDNXBDb3Q4i9NYRzz_T3fLd/view?usp=sharing"
      },
      {
        "id": "cse1006-cat-1-3",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1b8zxBeVe5WjjfX-9QKNgZAMyI908UfAK/view?usp=sharing"
      },
      {
        "id": "cse1006-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1b7qmt4oMkb2ee3pV4x-G8nfhkJqiJrQU/view?usp=sharing"
      },
      {
        "id": "cse1006-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1a2odfJ94CJZf-yKy4kOZ2YlCc2bszd9W/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE3006",
    "name": "Data Visualization",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 8,
    "papers": [
      {
        "id": "cse3006-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ESv-sCb1LvKptfmWHdRPa8P82-0zD2p4/view?usp=drivesdk"
      },
      {
        "id": "cse3006-cat-1-2",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ET5gfpw1XhTEJ4YyJuBE2nbJD3ZftlOT/view?usp=drivesdk"
      },
      {
        "id": "cse3006-cat-1-3",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EVOUxTxU0Mol5LhlHqQ0U7IS8QYW6dgD/view?usp=drivesdk"
      },
      {
        "id": "cse3006-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ERnBcfkmWOZvb6na8RzBvmWZ5xQb9lvU/view?usp=drivesdk"
      },
      {
        "id": "cse3006-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EQZ97S0CthR45zXevbglRX5JqNH4mX6N/view?usp=drivesdk"
      },
      {
        "id": "cse3006-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EQbmLJWAw2acLhv5qEnG4QTGKEcnwjC5/view?usp=drivesdk"
      },
      {
        "id": "cse3006-fat-7",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EQHFJYJtXR4Cx2JCrNgGB2ENQ5SauVvd/view?usp=drivesdk"
      },
      {
        "id": "cse3006-fat-8",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EPkAiBkefdxuUYljKwoVhaoA6guXj93J/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "CSE1022",
    "name": "ITP",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 4,
    "papers": [
      {
        "id": "cse1022-fat-1",
        "name": "2024-FAT-F2",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1tBQTyBis-wEakIBgwxugbUyJjiJfIrPj/view?usp=drivesdk"
      },
      {
        "id": "cse1022-fat-2",
        "name": "2024-FAT-F1",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1r8j8-XeMSnL4iDS6veaYud01G2bMm9-W/view?usp=drivesdk"
      },
      {
        "id": "cse1022-fat-3",
        "name": "31-08-2024FN",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1d6cKQ1QwxozQFL0LNjA5-UJJxy7iJdgW/view?usp=sharing"
      },
      {
        "id": "cse1022-fat-4",
        "name": "23-09-2024AF",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/13bOR9YNQni_YTVNfU-CuFJOkkFu_91ET/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE2001",
    "name": "DSA",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 11,
    "papers": [
      {
        "id": "cse2001-fat-1",
        "name": "2024-FAT",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1oP12RQOqYUi64tm0sBi7VbnrSfD6tdPv/view?usp=drivesdk"
      },
      {
        "id": "cse2001-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DeOCymx-Ku6pXCNGj9yEy0VK8DLur6Ia/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DXAWK0Pve9-4E-Eov14rrButiwePScpX/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DTY8Z8IHBndJq0r-CfsiyfsIyHDmyedU/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DK9NxBZ9zLEYAcOIMQQDzpGAHuZuvIBu/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-6",
        "name": "SS",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1cHnT2er8QbsuZ3UB-2Tm8AMydPfTE2YU/view"
      },
      {
        "id": "cse2001-fat-7",
        "name": "27-08-2024FN",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1WSBQhHmr5DtcBJ0UCQ5QtvtFEwgxyGDH/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-8",
        "name": "27-08-2024AN",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1YVV3ULnKRQ9PnJeeWlsjqiFcL00sZdSA/view?usp=sharing"
      },
      {
        "id": "cse2001-fat-9",
        "name": "CAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1De8dEKMIJ2D8ZoyF9lMbfNDnCnl-HT20/view?usp=sharing"
      },
      {
        "id": "cse2001-cat-2-10",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DW8HQfkWyI_Gtg1S3H8_2Y7OOsW7aKe3/view?usp=sharing"
      },
      {
        "id": "cse2001-cat-2-11",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DVg3BXIypdeeBNYbgBa4A2gn9WVhojJD/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE3002",
    "name": "AI",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 18,
    "papers": [
      {
        "id": "cse3002-fat-1",
        "name": "2024-FAT-F1",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1r5OPklkcbiJs-jRyLtzFVGrG4tx6BEhG/view?usp=drivesdk"
      },
      {
        "id": "cse3002-fat-2",
        "name": "2024-FAT-E2",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1qQcmdk_TkU8Gzt5XXpTMdCQjhiDHgBB6/view?usp=drivesdk"
      },
      {
        "id": "cse3002-fat-3",
        "name": "2024-FAT-E1",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1ppNkVIW8ojND8NrC2WjQqChhkXoLxF5u/view?usp=drivesdk"
      },
      {
        "id": "cse3002-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EGt39g6dppEqeJ79wCtkSX4X_QWb-iiB/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EOD0LXwOq91BHnSFMps8QmIhvPYYCF00/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-6",
        "name": "SS",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ETMC5Fz0nArqoUkGWm1EV1M9IB39mu8J/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-7",
        "name": "30-08-2024FN",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1cIu0EtwMIjfY-U4ZZYmtqSna5ZogPxD_/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-8",
        "name": "30-08-2024AF",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1cAO7xRFCv3ObYJWeShrDiGRXIon-NlAH/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-9",
        "name": "CAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EkhMEmZ_oaI5tBs2X4hd88CURvlzJy6f/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-1-10",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EYuoJI84Huz8vLbAf4r5KY9ArDJfsFUd/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-1-11",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EFBLzw3_9xZQ-kn3FnM01ibxnVi_Bm1C/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-2-12",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EZBr9CgyopMECrZ2FWDsViQ8zmU5WNw8/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-2-13",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ES1UnRC_w9rfFpKQ7o2RAMWJoFY882Ie/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-2-14",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ES1UnRC_w9rfFpKQ7o2RAMWJoFY882Ie/view?usp=sharing"
      },
      {
        "id": "cse3002-cat-2-15",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ES1UnRC_w9rfFpKQ7o2RAMWJoFY882Ie/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-16",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EGt39g6dppEqeJ79wCtkSX4X_QWb-iiB/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-17",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1EOD0LXwOq91BHnSFMps8QmIhvPYYCF00/view?usp=sharing"
      },
      {
        "id": "cse3002-fat-18",
        "name": "SS",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ETMC5Fz0nArqoUkGWm1EV1M9IB39mu8J/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE1007",
    "name": "Lab / Practical",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse1007-fat-1",
        "name": "1",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1JV6HdaLK53lw_-miin2VaTbN4umyXF9E/view?usp=sharing"
      },
      {
        "id": "cse1007-fat-2",
        "name": "2",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1JO9iVybWPdxiqzo3xYXKH1gpfR3mYNRM/view?usp=sharing"
      },
      {
        "id": "cse1007-fat-3",
        "name": "3",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1JBID7pEit7PtwPWAhKR4lgddZxzldTYq/view?usp=sharing"
      },
      {
        "id": "cse1007-fat-4",
        "name": "4",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1JD2KzUadr8ZF3VAmEjw_FpXbeBEzzh2A/view?usp=sharing"
      },
      {
        "id": "cse1007-fat-5",
        "name": "5",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1J219gQI63Yii66I-wj1HxuJcIz4PlWRQ/view?usp=sharing"
      },
      {
        "id": "cse1007-fat-6",
        "name": "6",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1J3jQkFxuw9S62RTzmiuzNGb0az8O6HkB/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE4001",
    "name": "Cloud Computing",
    "category": "Core Engineering",
    "semester": "Winter 2025-26",
    "papersCount": 6,
    "papers": [
      {
        "id": "cse4001-fat-1",
        "name": "1",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1J2whv8OdoCSqXfsOZYevnCq_WsRXitsi/view?usp=sharing"
      },
      {
        "id": "cse4001-fat-2",
        "name": "2",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1ItU6ni26aMwMkWCup70w81_Z_q-53IcJ/view?usp=sharing"
      },
      {
        "id": "cse4001-fat-3",
        "name": "3",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1J1wF-LulGdpKqR6K-zwOW0BtQxSxXZJS/view?usp=sharing"
      },
      {
        "id": "cse4001-fat-4",
        "name": "4",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1IrcNOsEcXtJNmToBXVoDrAz3lwO2ukhn/view?usp=sharing"
      },
      {
        "id": "cse4001-fat-5",
        "name": "5",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1IjPY95-RsAc0rGguMgLgfnVyvy6XtFQD/view?usp=sharing"
      },
      {
        "id": "cse4001-fat-6",
        "name": "6",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1If6WlTRWEsc5Gu2cUI99z6X-9zOWB5Q4/view?usp=sharing"
      }
    ]
  },
  {
    "code": "CSE1021",
    "name": "BLOCK CHAIN",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "cse1021-fat-1",
        "name": "26-08-2024AN",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1V-AxhiigMQAhH36GGv9VLbrYzLLNlMkA/view?usp=sharing"
      }
    ]
  },
  {
    "code": "ECE1010",
    "name": "Probability",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 8,
    "papers": [
      {
        "id": "ece1010-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jXhVPCD7lvmFZLlAZ6X1eXCAzsjX-OKD/view?usp=drivesdk"
      },
      {
        "id": "ece1010-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jdBudn3i7ct5bMu-4mS2n5myijpTe8vT/view?usp=drivesdk"
      },
      {
        "id": "ece1010-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jaBUf-106fEJP5EfvgyH5NgugDqtN8OA/view?usp=drivesdk"
      },
      {
        "id": "ece1010-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1j_Ot_xrpvPLwFKxUSDwt2MiqmqYwFzqA/view?usp=drivesdkk"
      },
      {
        "id": "ece1010-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jaCjMkkaw7A3CEwMskX5zu8OAdu3SAw6/view?usp=drivesdk"
      },
      {
        "id": "ece1010-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jTtNgmrWgLhpr_vMuqtuhoVkb6pFOK-f/view?usp=drivesdk"
      },
      {
        "id": "ece1010-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jZrVIBdUeSc0H1J5bGSX-D9ht8fkXnVs/view?usp=drivesdk"
      },
      {
        "id": "ece1010-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jcK29v2zYUMSpfiHxtyDXPPz9lU7m9O0/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "ECE2001",
    "name": "Theory",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 8,
    "papers": [
      {
        "id": "ece2001-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jj91eq4nOH6O15ie3_xieZHyvMM-sTIe/view?usp=drivesdk"
      },
      {
        "id": "ece2001-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jnf5S0xi3IU4pCym_LVPugKg6TzhoPgQ/view?usp=drivesdk"
      },
      {
        "id": "ece2001-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jqNGa5UrgWmImtRw4yJraPCutUixJ_h2/view?usp=drivesdk"
      },
      {
        "id": "ece2001-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jlxLTQ3WBnRvYXKniYMd-Zqmf8tdDfly/view?usp=drivesdk"
      },
      {
        "id": "ece2001-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jqYEl8qbfgp-z0QSI8g8g5kvy4KJwEPY/view?usp=drivesdkk"
      },
      {
        "id": "ece2001-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jharc94RTvk5YVip1pnABgScHWzjbU6Y/view?usp=drivesdk"
      },
      {
        "id": "ece2001-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jjEMQiFw1Lk5YShM0VFMyOJIjNUZ0bYv/view?usp=drivesdk"
      },
      {
        "id": "ece2001-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jnteyVvOf8awAZivJuNUUBfi94Y0waLq/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "ECE2014",
    "name": "Theory",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 8,
    "papers": [
      {
        "id": "ece2014-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1juwQV347mXrT12huoUENK_hB2wyfSuHo/view?usp=drivesdkk"
      },
      {
        "id": "ece2014-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14rBwH-y_XeDwDIZyBJ5gmXZsS2TOOWZi/view?usp=drivesdk"
      },
      {
        "id": "ece2014-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/14bo_n1KhEpZWmhxcN_HPUjCImtaO3rO4/view?usp=drivesdk"
      },
      {
        "id": "ece2014-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1k3Vl--tCdlhxwRvh5CBQf1vZ1ZQ2TwSt/view?usp=drivesdk"
      },
      {
        "id": "ece2014-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1k2qyrxUZ_Wd1Y_t5x9EjRfVoY9PY9oG9/view?usp=drivesdk"
      },
      {
        "id": "ece2014-cat-1-6",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1k9gA58g-Km51OGY3_0nn5d8hfIr0AC7K/view?usp=drivesdk"
      },
      {
        "id": "ece2014-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jtlGHIaxJ-8ddq1XS6zemcjIRcKcmRHn/view?usp=drivesdk"
      },
      {
        "id": "ece2014-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1jyZVmMkMUcXb65Nfq8sLrBNNPyrnX8gh/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "ECE2005",
    "name": "Signals & Systems",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 8,
    "papers": [
      {
        "id": "ece2005-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VD79lZ64M5JTBIi5n41LDsdBOuxygoqH/view?usp=sharing"
      },
      {
        "id": "ece2005-fat-2",
        "name": "CAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1V6J5O8cJG7aFEqEq3NScPCU9WFmaJHab/view?usp=sharing"
      },
      {
        "id": "ece2005-cat-1-3",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VFNF9zwz6wX2iaW9Ch7agv1ymylGg2Gr/view?usp=sharing"
      },
      {
        "id": "ece2005-cat-1-4",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VeOMpIhAkj2XMnpimVJ0ZlLa4A-fXiK7/view?usp=sharing"
      },
      {
        "id": "ece2005-cat-1-5",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VWIv3CE7uykIxs9vWMt1cGX31u5vfy0F/view?usp=sharing"
      },
      {
        "id": "ece2005-cat-2-6",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VenxzEyfm9aXJ1EjeUlqjHO1-VRxaBZz/view?usp=sharing"
      },
      {
        "id": "ece2005-fat-7",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VeOMpIhAkj2XMnpimVJ0ZlLa4A-fXiK7/view?usp=sharing"
      },
      {
        "id": "ece2005-fat-8",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1VfycWJvnXxNNeN2BSBmVtQfEv-3PjxeV/view?usp=sharing"
      }
    ]
  },
  {
    "code": "MGT1040",
    "name": "Management",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 7,
    "papers": [
      {
        "id": "mgt1040-fat-1",
        "name": "2024-FAT",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1n0hft3u3QNguaE32emniKa9K2Oc2qG7j/view?usp=drivesdk"
      },
      {
        "id": "mgt1040-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/17YPCTdkRhggKWVG0jlR-HEEhKyRGtTf5/view?usp=drivesdk"
      },
      {
        "id": "mgt1040-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1D7Yi9ScMLHytf9kXRAcT-ka-yWblfIWr/view?usp=sharing"
      },
      {
        "id": "mgt1040-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1D9Frcz7lipg-P_GpqJCopXRlJzRhNvH6/view?usp=sharing"
      },
      {
        "id": "mgt1040-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DEe2i68ue8bVz3znyP4DDkDiDz_fcAjm/view?usp=sharing"
      },
      {
        "id": "mgt1040-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DEe2i68ue8bVz3znyP4DDkDiDz_fcAjm/view?usp=sharing"
      },
      {
        "id": "mgt1040-fat-7",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1DHQclk5b6HjZkiMni5-vDDFd67hHyqrQ/view?usp=sharing"
      }
    ]
  },
  {
    "code": "MGT2006",
    "name": "Management",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 2,
    "papers": [
      {
        "id": "mgt2006-cat-1-1",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1km6Iz3JxEyVwOfun0MXwfDTVP_VvTMdt/view"
      },
      {
        "id": "mgt2006-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1klcYpafNJBcAzE4zJf-a-7CrFHR_09hM/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "MAT1011",
    "name": "Maths",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 9,
    "papers": [
      {
        "id": "mat1011-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15zy8Q7YimKYyz3-5HFme1bXIdB6FGKRj/view?usp=drivesdk"
      },
      {
        "id": "mat1011-fat-2",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15rHTvCI7A6Id5VNUelXnWVWUDREyVdK4/view?usp=drivesdk"
      },
      {
        "id": "mat1011-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15lpi6Lc3oWuobp7JpfYmB35cBSSWJLSR/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-2-4",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1615__Lq0lf_Q8-1cSt-JxpvI6G2xb7w5/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-2-5",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16-HHGNUgYtuCOqoZObvoJauX6uFyA-jT/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-2-6",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/164SRYkRdHclG857ch57gRyBvNfnq2DDO/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-1-7",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15mtJ4lViHhD_fxiEmCan_vLgRYKn3Tjz/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-1-8",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15u2S9pNkk3tiNp28EKwFvVXkobJr0ERm/view?usp=drivesdk"
      },
      {
        "id": "mat1011-cat-1-9",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/15odmLlcSuxdeJ9DXukjGRACcR-VW9Jl1/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "MAT1003",
    "name": "Discrete Maths",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 14,
    "papers": [
      {
        "id": "mat1003-fat-1",
        "name": "2024-FAT-2",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1mNQAdMDR3bX7fp9WqCxBX0G_srdUilxB/view?usp=drivesdk"
      },
      {
        "id": "mat1003-fat-2",
        "name": "2024-FAT-1",
        "type": "FAT",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1kW7lqWrH9d64D-VkDPUGrU27qdKlJYqr/view?usp=drivesdk"
      },
      {
        "id": "mat1003-fat-3",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CQ6FNvi7Pdg_3Db7c6KVauYsQgaDZEil/view?usp=sharing"
      },
      {
        "id": "mat1003-fat-4",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CJoAkiHRPAKwjb45eV5PkRAV0OtHIDA0/view?usp=sharing"
      },
      {
        "id": "mat1003-fat-5",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CTXiLQ15JzkIn540WC0PMGlhx6_eTpFV/view?usp=sharing"
      },
      {
        "id": "mat1003-fat-6",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CckNMk5KG_IZt4vvRRYw11ka0mLjUOMR/view?usp=sharing"
      },
      {
        "id": "mat1003-fat-7",
        "name": "SS",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1Cq6U0k1rJs7PH-HGL2bWcfe0VBArBQVj/view?usp=sharing"
      },
      {
        "id": "mat1003-cat-1-8",
        "name": "26-08-2024FN-CAT-1",
        "type": "CAT-1",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1RSnImAcR1tPBKTIvHeEjRh1a5tH6Q8jj/view?usp=sharing"
      },
      {
        "id": "mat1003-cat-1-9",
        "name": "26-08-2024AN-CAT-1",
        "type": "CAT-1",
        "year": 2024,
        "url": "https://drive.google.com/file/d/1UNfb7TECz3LTf-BX6fFmiw_-9nVBC2NH/view?usp=sharing"
      },
      {
        "id": "mat1003-cat-1-10",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1D-mq4r0iPvKSOKib9Wech4XBAqMWUnng/view?usp=sharing"
      },
      {
        "id": "mat1003-cat-1-11",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/16T4kBXGskbfiaADGTw7W67WdHkmsX6fi/view"
      },
      {
        "id": "mat1003-cat-1-12",
        "name": "CAT-1",
        "type": "CAT-1",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CMy71oLx1H1aUXvn3i8p-OPhHTjZzxQX/view?usp=sharing"
      },
      {
        "id": "mat1003-fat-13",
        "name": "CAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1Ctvhu57zZl6yn0KaYYcIqTRvtgfowRpQ/view?usp=sharing"
      },
      {
        "id": "mat1003-cat-2-14",
        "name": "CAT-2",
        "type": "CAT-2",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1CFNSh8CURHnctmBvAa1y3K5QCCX3G7DY/view?usp=sharing"
      }
    ]
  },
  {
    "code": "MAT1002",
    "name": "Calculus",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "mat1002-folder",
        "name": "Calculus Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/15nlktKIENvzKN-RaNMB_gC4fl1bGtOxX"
      }
    ]
  },
  {
    "code": "MAT1001",
    "name": "Calculus",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "mat1001-folder",
        "name": "Calculus Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1W5n_FJgd2S91ZJfZ72IYOmfNfFD32kQp"
      }
    ]
  },
  {
    "code": "CSE1012",
    "name": "Python",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "cse1012-folder",
        "name": "Python Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1q_euP2BIoW7e1glult6-AU9brUgq7xCu"
      }
    ]
  },
  {
    "code": "CSE2005",
    "name": "Java",
    "category": "Core Engineering",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "cse2005-folder",
        "name": "Java Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1Z07UmivwAUMhVNbJjgflgBnPIxLCi3Az"
      }
    ]
  },
  {
    "code": "CHY1009",
    "name": "Chemistry",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "chy1009-folder",
        "name": "Chemistry Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1ykHwz_uLsGqo36G_HK1BwlBoiBmex4dg"
      }
    ]
  },
  {
    "code": "PHY1008",
    "name": "Physics",
    "category": "Basic Sciences",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "phy1008-folder",
        "name": "Physics Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1MgVGJKns-uESk9GwBnoW64j24PWX8163"
      }
    ]
  },
  {
    "code": "ECE1001",
    "name": "Feee",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "ece1001-fat-1",
        "name": "FAT",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/file/d/1-yVke2cerNTS6FI58kknYrgxkUGuvmFn/view?usp=drivesdk"
      }
    ]
  },
  {
    "code": "ECE1002",
    "name": "Feee",
    "category": "Hardware",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "ece1002-folder",
        "name": "Feee Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/18dt056s1MRYaB6GQa8kA0NpHfmCSiAdp"
      }
    ]
  },
  {
    "code": "ENG1001",
    "name": "English",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "eng1001-folder",
        "name": "English Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1L3DrnlK2K1sZ_phdsFXGXuUCx4anluqW"
      }
    ]
  },
  {
    "code": "ENG1002",
    "name": "English",
    "category": "Elective",
    "semester": "Fall 2025-26",
    "papersCount": 1,
    "papers": [
      {
        "id": "eng1002-folder",
        "name": "English Resource Folder",
        "type": "FAT",
        "year": 2025,
        "url": "https://drive.google.com/drive/folders/1xXFyJLNSk6FHDIr_N84udZeLpqOPkMem"
      }
    ]
  }
];
