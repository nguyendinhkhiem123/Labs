import React, { useEffect, useState } from 'react';
import { Tag , Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Comment from './../Comment/Comment';
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../Const/index';


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
function Body(props) {
    const posts = useSelector(state => state.post);
    const users = useSelector(state => state.user);
    const comments = useSelector(state => state.comment);
    const [ search , setSearch ] = useState('');
   
    const dispatch = useDispatch();
    useEffect(()=>{
       
        dispatch({ type : Action.WATCH_FETCH_POST});
        dispatch({ type : Action.WATCH_FETCH_USER})
        dispatch({ type : Action.WATCH_FETCH_COMMENT});
      
    }, [])

    const onChange =(e)=>{
        setSearch(e.target.value);
    }
    console.log(posts , users , comments);
    let resultPost = [];
    if(posts.length > 0){
        resultPost =  posts.filter((value,index)=>{
            return value.title.trim().toLowerCase().indexOf(search.trim().toLowerCase()) !== -1;
        })
    }
    return (
       <> 
        <div className="search">
            <Input placeholder="Search post title ..." prefix={<SearchOutlined />} onChange={onChange}/>
        </div>
           {   resultPost.length > 0 ?
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
                                {value.content.slice(0,99)}... <Link to={`post/${value.id}`}>Xem thêm</Link>
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
        </>
    );
}

export default Body;