import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <div>
      {/* Banner Header */}
      <div className="text-white py-5 text-center" style={{ background: 'linear-gradient(90deg, #ff8c00, #1e6091)' }}>
        <Container>
          <h1 className="display-4 fw-bold">Tentang FreshClean Laundry</h1>
          <p className="lead">Nikmati kemudahan dan kebersihan tak tertandingi bersama FreshClean Laundry.</p>
        </Container>
      </div>

      {/* Tentang Kami */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <Image
              src="public/freshcleanlaundry.jpg"
              alt="Tentang FreshClean Laundry"
              fluid
              rounded
              className="shadow-lg border border-primary"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3 text-danger">Tentang Kami</h2>
            <p className="text-muted">
            FreshClean Laundry didirikan dengan tujuan memberikan layanan laundry yang cepat, berkualitas dan terpercaya.
            Kami menggunakan teknologi modern dan deterjen ramah lingkungan untuk memastikan pakaian anda bersih dan aman digunakan.
            </p>
            <p className="text-muted">
            Dapat digunakan untuk berbagai kebutuhan, mulai dari pakaian harian hingga perlengkapan rumah.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Visi dan Misi */}
      <div className="py-5" style={{ backgroundColor: '#ffe4b5' }}>
        <Container>
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold text-danger">Visi & Misi</h2>
              <p className="text-muted">Solusi tepat untuk hidup tanpa repot cucian</p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow border-0 bg-white">
                <Card.Body>
                  <Card.Title className="fw-bold text-danger">Visi</Card.Title>
                  <Card.Text>
                  Menjadi penyedia layanan laundry terpercaya yang mengutamakan kualitas, kebersihan, dan kepuasan pelanggan di setiap cucian.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 shadow border-0 bg-white">
                <Card.Body>
                  <Card.Title className="fw-bold text-danger">Misi</Card.Title>
                  <ul className="text-muted ps-3 mb-0">
                    <li>Memberikan layanan laundry yang bersih, wangi, dan tepat waktu.</li>
                    <li>Menggunakan peralatan dan bahan berkualitas yang aman untuk semua jenis pakaian.</li>
                    <li>Menyediakan pelayanan ramah, profesional, dan responsif terhadap kebutuhan pelanggan.</li>
                    <li>Menjaga konsistensi dalam kualitas hasil cucian dan pelayanan.</li>
                    <li>Berinovasi dalam layanan agar terus memberikan kemudahan dan kenyamanan bagi pelanggan, termasuk layanan antar-jemput gratis.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Armada Kami */}
      <div className="py-5" style={{ backgroundColor: '#40e0d0' }}>
        <Container>
          <h2 className="fw-bold text-center text-danger mb-4">Layanan Kami</h2>
          <Row className="g-4">
            {[{ file: "laundrykiloan.jpg", name: "Laundry Kiloan", price: "Rp 8.000 / kg" },
              { file: "laundrysatuan.jpg", name: "Laundry Satuan", price: "Rp 10.000 / item" },
              { file: "drycleaning.jpg", name: "Dry Cleaning", price: "Rp 25.000 / item" },
              { file: "laundryboneka.jpg", name: "Laundry Boneka", price: "Rp 20.000 / item" },
              { file: "cucikarpet.jpg", name: "Cuci Karpet", price: "Rp 25.000 / meter" },
              { file: "cucisepatu.png", name: "Cuci Sepatu", price: "Rp 20.000 / pasang" },
              { file: "setrika.jpg", name: "Setrika Saja", price: "Rp 5.000 / kg" },
              { file: "expressservis.jpg", name: "Express Service (Selesai 1 Hari)", price: "Rp 10.000 (dari harga normal)" },
              { file: "antarjemput.png", name: "Antar-Jemput", price: "Gratis" },
            ].map((layanan, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm h-100 bg-white">
                  <Card.Img src={`/${layanan.file}`} alt={layanan.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold text-dark">{layanan.name}</Card.Title>
                    <Card.Text className="text-primary fw-semibold">{layanan.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Testimoni */}
      <div className="py-5" style={{ backgroundColor: '#ffffe0' }}>
        <Container>
          <h2 className="fw-bold text-center text-danger mb-4">Testimoni Pelanggan</h2>
          <Row className="g-4">
            {[{ name: "Na Jaemin", text: "Saya biasa pakai layanan dry cleaning untuk jas kerja. Hasilnya selalu rapi dan terawat." },
              { name: "Park Chanyeol", text: "Sepatu sneakers saya dicuci di FreshClean Laundry dan hasilnya seperti baru. Detailnya bersih banget. Recommended buat pecinta sepatu!" },
              { name: "Kim Jisoo", text: "Cucian keluarga bersih, harum, dan diantar tepat waktu. Nggak perlu repot lagi urus cucian setiap hari." },
              { name: "Lalisa", text: "Boneka dan gorden rumah saya dicuci di sini. Nggak hanya bersih, tapi juga aman buat anak-anak. Hasilnya lembut dan wangi." },
              { name: "Jeonghan", text: "Pernah coba layanan express untuk cuci sprei dan selimut karena tamu mendadak. Hasilnya cepat dan memuaskan!" },
              { name: "Enami Asa", text: "Aku suka banget karena tinggal WA, cucian langsung dijemput. Prosesnya mudah, hasilnya maksimal. Pelayanan terbaik!" }
            ].map((t, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body>
                    <Card.Text className="fst-italic">"{t.text}"</Card.Text>
                    <Card.Subtitle className="text-muted mt-3">- {t.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

       {/* Cara Pemesanan */}
       <div className="py-5" style={{ backgroundColor: '#f0e68c' }}>
        <Container>
          <h2 className="fw-bold text-center text-danger mb-4">Penggunaan Layanan Spesial</h2>
          <Row className="g-4">
            {[{ step: "1. Hubungi Kami", desc: "Klik tombol 'Hubungi Kami' atau pesan via WhatsApp." },
              { step: "2. Penjemputan Cucian", desc: "Tim kami akan menjemput cucian langsung ke lokasi Anda, sesuai waktu yang disepakati." },
              { step: "3. Proses Pencucian", desc: "Pakaian/kebutuhan Anda akan dicuci dengan teliti, bersih, dan wangi oleh tim profesional kami." },
              { step: "4. Pengantaran Kembali", desc: "Setelah selesai, kami akan mengantar cucian kembali ke alamat Anda dalam keadaan rapi dan siap pakai." }
            ].map((item, i) => (
              <Col md={3} key={i}>
                <Card className="text-center h-100 shadow-sm border-0 bg-white">
                  <Card.Body>
                    <Card.Title className="fw-bold text-primary">{item.step}</Card.Title>
                    <Card.Text className="text-muted">{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AboutUs;