import { sql } from '@vercel/postgres';

// 공지사항 테이블 생성 쿼리
export async function createNoticesTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS notices (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(50) NOT NULL,
        priority VARCHAR(20) NOT NULL,
        is_fixed BOOLEAN DEFAULT false,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('Notices table created successfully');
  } catch (error) {
    console.error('Error creating notices table:', error);
    throw error;
  }
}
