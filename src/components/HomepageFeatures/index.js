import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tampilan Yang Menarik',
    Svg: require('@site/static/img/question.svg').default,
    description: (
      <>
       Berbasis CSS Bootstrap, mLITE bisa diubah sesuai keinginan. Bahkan jika anda ingin membuatnya sendiri. Silahkan sesuaikan pengaturan.
      </>
    ),
  },
  {
    title: 'Kerangka Kerja Independen',
    Svg: require('@site/static/img/monitoring.svg').default,
    description: (
      <>
        mLITE dikembangkan dengan Framework sendiri dan sepenuhnya aman. Sederhana dan mudah diikuti. Baca dokumentasi pengembangan.
      </>
    ),
  },
  {
    title: 'Mobile Dan Modular',
    Svg: require('@site/static/img/help.svg').default,
    description: (
      <>
        Sepenuhnya responsif untuk perangkat apa pun. Atau buat modul Anda sendiri, meskipun Anda adalah pemrogram pemula, karena sangat sederhana.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
