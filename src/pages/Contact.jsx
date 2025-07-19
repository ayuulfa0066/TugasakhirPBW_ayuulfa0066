import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div>
      {/* Header */}
      <div className="text-white text-center py-5" style={{ background: 'linear-gradient(90deg, #ff8c00, #1e6091)' }}>
        <h1 className="fw-bold display-5">Hubungi Kami</h1>
        <p className="lead">Kami siap membantu Anda kapan saja</p>
      </div>

      {/* Konten */}
      <div style={{ backgroundColor: '#e0e0e0' }} className="py-5">
        <Container>
          <Row className="g-4">

            {/* Form Kontak */}
            <Col md={7}>
              <h3 className="fw-bold text-danger mb-4">Kirim Pesan</h3>
              <Card className="p-4 shadow-sm border-0 bg-white">
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan nama Anda" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukkan email Anda" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Tulis pesan Anda..." required />
                  </Form.Group>

                  <Button variant="danger" type="submit">Kirim</Button>
                </Form>
              </Card>
            </Col>

            {/* Informasi Kontak */}
            <Col md={5}>
              <h3 className="fw-bold text-danger mb-4">Informasi Kontak</h3>
              <Card className="p-4 shadow-sm border-0 bg-white">
                <p><strong>📍 Alamat:</strong> Jl. Anyelir No.10 Pemalang</p>
                <p><strong>📞 Telepon:</strong> +62 896 6939 6985</p>
                <p><strong>📧 Email:</strong> info@freshcleanlaundry.id</p>
                <p><strong>⏰ Jam Operasional:</strong> Setiap hari, 08.00 - 20.00 WIB</p>
                <hr />
                <p className="text-muted">
                  Anda juga dapat menghubungi kami melalui WhatsApp atau kunjungi lokasi kami langsung.
                </p>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;