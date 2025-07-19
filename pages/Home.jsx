import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/beragamlayanan.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <Container className="text-center">
          <h1 className="display-3 fw-bold">Selamat Datang di FreshClean Laundry!</h1>
          <p className="lead">
            Temukan layanan laundry terbaik dengan proses cepat dan hasil yang bersih maksimal.
          </p>
          <Button variant="light" size="lg" href="/contact">
            Hubungi Kami
          </Button>
        </Container>
      </div>

      {/* Fitur Section */}
      <div style={{ backgroundColor: '#f5fff0' }} className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-danger mb-5">Kenapa Memilih FreshClean Laundry?</h2>
          <Row className="g-4">
            {[
              {
                title: "Bersih Maksimal",
                desc: "Setiap cucian dikerjakan dengan standar tinggi menggunakan deterjen berkualitas dan proses higienis.",
                image: "/bersihmaksimal.jpg",
              },
              {
                title: "Tepat Waktu",
                desc: "Pengerjaan cepat dan selesai sesuai jadwal, termasuk layanan express 1 hari jadi.",
                image: "/tepatwaktu.jpg",
              },
              {
                title: "Beragam Layanan Spesial",
                desc: "Dari laundry kiloan, dry cleaning, cuci sepatu, hingga karpet dan gorden, semua bisa!",
                image: "/layananlaundry.jpg",
              },
              {
                title: "Harga Terjangkau",
                desc: "Layanan premium dengan harga bersahabat, cocok untuk pelajar,pekerja, dan keluarga.",
                image: "/hargaterjangkau.png",
              },
            ].map((item, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="fw-bold text-dark">{item.title}</Card.Title>
                    <Card.Text className="text-muted">{item.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <h4 className="fw-semibold">Siap menikmati cucian bersih tanpa repot?</h4>
            <Button variant="danger" href="/about">
              Pelajari Tentang Kami
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;