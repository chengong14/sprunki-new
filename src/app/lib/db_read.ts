import sql from '@/app/lib/db_connect';
import { Game } from '@/app/lib/types';

export async function getGames(): Promise<Game[]> {
    try {
        const rows = await sql`
            SELECT id, game, search_url, img_url, iframe, new_description as description, metadata
            FROM game_results
        `;
        
        // console.log('Raw database rows:', rows);
        
        return rows.map(row => {
            try {
                // 如果metadata已经是对象，就不需要解析
                if (typeof row.metadata === 'object' && row.metadata !== null) {
                    return {
                        ...row,
                        metadata: row.metadata
                    };
                }
                
                // 如果是字符串，尝试解析
                if (typeof row.metadata === 'string') {
                    // 移除可能存在的特殊字符或空白，并将单引号替换为双引号
                    const cleanedMetadata = row.metadata.trim()
                        .replace(/'/g, '"')  // 替换所有单引号为双引号
                        .replace(/([{,]\s*)(\w+):/g, '$1"$2":');  // 给属性名添加双引号
                    
                    try {
                        return {
                            ...row,
                            metadata: cleanedMetadata ? JSON.parse(cleanedMetadata) : undefined
                        };
                    } catch (innerError) {
                        console.error('Failed to parse cleaned metadata:', cleanedMetadata);
                        console.error('Inner parse error:', innerError);
                        return {
                            ...row,
                            metadata: undefined
                        };
                    }
                }
                
                // 如果既不是对象也不是字符串，返回undefined
                return {
                    ...row,
                    metadata: undefined
                };
            } catch (parseError) {
                console.error('Error parsing metadata for game:', row.game);
                console.error('Raw metadata content:', row.metadata);
                console.error('Parse error:', parseError);
                return {
                    ...row,
                    metadata: undefined
                };
            }
        }) as Game[];
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
}