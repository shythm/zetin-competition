import './Admin.css';
import { useState, useCallback } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

import AdminAuthForm from '../forms/AdminAuthForm';

/* Bootstrap Components */
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

/* Admin Page */
export default function Admin() {
  const [payload, setPayload] = useState(null);

  return (
    <>
      {/* sidebar section */}
      <div className="sidebar bg-light border-right">
        <h3>ZETIN Competition Admin Page</h3>
        <hr />
        <AdminAuthForm onAuthChange={useCallback((p) => setPayload(p), [])} />
        <hr />
        <ListGroup>
          <ListGroup.Item as={NavLink} to="competitions">
            라인트레이서 대회 페이지 관리
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="files">
            포스터 및 파일 관리
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="participants">
            대회 참가자 관리
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="counter">
            계수기 관리
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/* page section */}
      <div className="container-page">
        {payload ? (
          <Container fluid="sm" className="py-4">
            <Outlet />
          </Container>
        ) : (
          <div>
            <h1>Blocked!</h1>
            <p>관리자 로그인이 필요합니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
