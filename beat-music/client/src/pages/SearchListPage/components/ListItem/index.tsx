import { memo } from "react";
import { useMusic } from "@/hooks/useMusic";
import Icon from "@/components/Icon";
import { ListItemProps } from "@/types/music";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function ListItem({ item }: ListItemProps) {
  const {
    hover,
    show,
    isPlaying,
    isEqualVideoId,
    isShowEqualVideoId,
    isEqualVideoPlaying,
    handleMouseEnter,
    handleMouseLeave,
    handleClickCapturePlay,
    handleClickCapturePause,
    handleClickPlay,
    handleAddPlaylist,
  } = useMusic(item);
  return (
    <div>
      <div
        className="flex group border-b-white/10 border-solid border-b-[1px] pt-3 pb-3 pr-7 pl-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative flex-shrink-0">
          <Icon
            hover={hover}
            show={show}
            isEqualVideoId={isEqualVideoId}
            isPlaying={isPlaying}
            isShowEqualVideoId={isShowEqualVideoId}
            handleClickCapturePlay={handleClickCapturePlay}
            handleClickCapturePause={handleClickCapturePause}
          />
          <div
            className="w-100 h-100 bg-black cursor-pointer"
            onClick={
              isEqualVideoPlaying ? handleClickCapturePause : handleClickPlay
            }
          >
            <img
              className={`group-hover:brightness-[20%] ${
                item.thumbnails[0]["width"] > 60 ? "w-[60px] h-[60px]" : ""
              } ${isShowEqualVideoId ? "brightness-[20%]" : ""}`}
              src={item.thumbnails[0]["url"]}
            />
          </div>
        </div>

        <div
          className={`mr-auto ml-[20px] flex items-center ${
            item.album?.name ? "flex-[1]" : "flex-[1.7]"
          }`}
        >
          <div className="text-white">{item.title}</div>
        </div>

        <div className="flex flex-[2]">
          <div className="text-gray-400 w-[180px] ml-[25px] flex items-center flex-[1.3]">
            {item.artists[0]?.["name"] && item.artists[0]["name"]}
          </div>

          {item.album?.name && (
            <div className="text-gray-400 w-[180px] ml-[25px] items-center flex flex-1">
              <div className="whitespace-nowrap break-all overflow-hidden text-ellipsis">
                {item.album.name}
              </div>
            </div>
          )}

          <div className="flex items-center justify-end flex-1 ">
            <FontAwesomeIcon
              className="text-gray-400 text-[21px] cursor-pointer"
              icon={faSquarePlus}
              onClick={handleAddPlaylist}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ListItem);
