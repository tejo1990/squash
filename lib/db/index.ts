import { sql } from '@vercel/postgres';

export async function getNotices() {
  try {
    const { rows } = await sql`
      SELECT * FROM notices 
      ORDER BY is_fixed DESC, created_at DESC;
    `;
    return rows;
  } catch (error) {
    console.error('Error fetching notices:', error);
    throw error;
  }
}

export async function createNotice(notice: {
  title: string;
  content: string;
  category: string;
  priority: string;
  isFixed?: boolean;
}) {
  try {
    const { rows } = await sql`
      INSERT INTO notices (title, content, category, priority, is_fixed)
      VALUES (${notice.title}, ${notice.content}, ${notice.category}, ${notice.priority}, ${notice.isFixed || false})
      RETURNING *;
    `;
    return rows[0];
  } catch (error) {
    console.error('Error creating notice:', error);
    throw error;
  }
}
