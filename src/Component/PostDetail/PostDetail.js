import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch , Link } from 'react-router-dom';
import { getOne } from '../../Api/Post'
import { Tag , Input } from 'antd';
import Comment from '../Comment/Comment';
import './PostDetail.css';
import useLoading from '../HookLoading/HookLoading';
const tagCss = [
    "magenta",
    "red",
    "volcano",
    "orange",
    "gold",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue"
  
]
function PostDetail(props) {
    const [resultPost , setResultPost ] = useState([]);
    const match = useRouteMatch();
    const comments = useSelector(state => state.comment);
    const users = useSelector(state => state.user);
    const [ Loading , Hidden , Display ] = useLoading();
    const fetchOne  = async ()=>{
        try{
            Display()
           const res = await getOne(match.params.slug);
           Hidden();
           setResultPost(res.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchOne()
    },[])
    return (
        <>
            {  
            resultPost.length > 0 ?
               resultPost.map((value,index)=>{
                   return(
                    <div className="post">
                        <div className="post__title">
                            <h1>{value.title}</h1>
                        </div>
                        <div className="post__decs">
                            <div className="post__author">
                                <h3>
                                    Author :  {
                                        users.length > 0 ?
                                        (   
                                            users.filter(( user )=>{
                                                return user.id === value.owner
                                            })
                                        )[0].name 
                                        : "Không xác định"
                                    }                          
                                </h3>
                                <h3>CrateAt : { (new Date(value.created_at)).toString().slice(4,16) }</h3>
                            </div>
                            <div className="post__tag">
                                {
                                   value.tags.map((tag , ind)=>{
                                       return ind < 10 ?
                                          <Tag color={tagCss[ind]}>{tag}</Tag>
                                          :  <Tag color={tagCss[ind%10]}>{tag}</Tag>
                                   })

                                }
                            </div>
                        </div>
                        <div className="post__body">
                            <h3>
                                {value.content}
                            </h3>
                        </div>
                        <div className="post__comment">
                            {
                               
                            }
                            <Comment
                                comments = { 
                                    comments.length > 0 ? 
                                    comments.filter(( comment , ind )=>{
                                    return comment.post === value.id
                                  }) 
                                 : []
                                }
                                users = { users }
                            />
                        </div>
                    </div>
                   )
               })
               : 
               <div style={{
                   marginTop : '48px',
                   textAlign : 'center',
                   fontSize : '20px'
               }}>
                   Không có bảng tin nào phù hợp
               </div>
           } 
           {Loading}
        </>
    );
}

export default PostDetail;