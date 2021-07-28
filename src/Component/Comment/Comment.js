import React from 'react';
import { Collapse , Avatar} from 'antd';
import './Comment.css'

const { Panel } = Collapse
function Comment(props) {
    const { users , comments } =props;
    return (
        <Collapse ghost>
            <Panel header={`${comments.length} replies`}>
                {
                    comments.length > 0 ? 
                    comments.map((value,index)=>{
                    return (
                        <div className="comment" key={index}>
                        <div className="comment__avatar">
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </div>
                        <div className="comment__body">
                            <div className="comment__header">
                                <span className="comment__name">
                                    {
                                        (
                                            users.filter((user)=>{
                                            return user.id === value.owner
                                            })
                                        )[0].name
                                    }
                                </span>
                                <span className="comment__hour">{ (new Date(value.created_at)).toString().slice(4,16) }</span>
                            </div>
                            <div className="comment__content">
                                <p>{value.content}</p>
                            </div>
                            <div className="comment__footer">
                                <p>Reply</p>
                            </div>
                        </div>
                    </div>
                    )
                    }) 
                    : 
                    "Hãy comment nào..."
                }
            </Panel>
    </Collapse>
    );
}

export default Comment;